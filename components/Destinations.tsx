import React, { useState } from 'react';
import { destinations } from '../destinations';
import DestinationCard from './DestinationCard';
import DetailedItineraryView from './DetailedItineraryView';
import type { Destination, Itinerary, AccommodationOption } from '../types';
import { initialItineraries } from '../itineraries';
import { detailedRoutes } from '../detailedRotes';

const normalizeStr = (str: string) => str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '');

export interface TripOption {
    returnDate: string;
    totalCost: number;
    duration: string;
    departureFlight: Itinerary;
    returnFlight: Itinerary;
}

export interface BestTripCombination {
    type: 'Menor Preço' | 'Melhor Custo-Benefício';
    totalCost: number;
    departureFlight: Itinerary;
    returnFlight: Itinerary;
    accommodation: AccommodationOption;
}

const calculateTripOptions = (destination: Destination): TripOption[] => {
    const { places, title: destTitle } = destination;
    const tripOptions: TripOption[] = [];

    const departureFlights = initialItineraries.filter(it => {
        const title = normalizeStr(it.title);
        const event = it.events[0];
        const isDeparture = title.includes(normalizeStr(places[0])) && title.includes(normalizeStr(places[1]));
        if (!isDeparture) return false;

        // Filter by the date in the destination card's title
        if (destTitle.includes('(18/12)')) return event.startDate === '18/12';
        if (destTitle.includes('(19/12)')) return event.startDate === '19/12';
        if (destTitle.includes('(20/12)')) return event.startDate === '20/12';
        return false;
    });

    if (departureFlights.length === 0) return [];

    // Find all available return flights from the destination
    const returnFlights = initialItineraries.filter(it => {
        const title = normalizeStr(it.title);
        return title.includes(normalizeStr(places[1])) && title.includes(normalizeStr(places[2]));
    });

    // Create combinations for each departure flight found
    departureFlights.forEach(departureFlight => {
         returnFlights.forEach(returnFlight => {
            const departureDateStr = departureFlight.events[0].startDate;
            const returnDateStr = returnFlight.events[0].startDate;
            
            const [depDay, depMonth] = departureDateStr.split('/').map(Number);
            const [retDay, retMonth] = returnDateStr.split('/').map(Number);

            const depDate = new Date(2025, depMonth - 1, depDay);
            const retDate = new Date(2025, retMonth - 1, retDay);

            if (retDate <= depDate) return;

            const diffTime = Math.abs(retDate.getTime() - depDate.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

            tripOptions.push({
                returnDate: returnDateStr,
                totalCost: departureFlight.totalPrice + returnFlight.totalPrice,
                duration: `${diffDays} noites / ${diffDays + 1} dias`,
                departureFlight: departureFlight,
                returnFlight: returnFlight,
            });
        });
    });
    
    return tripOptions.sort((a, b) => a.totalCost - b.totalCost);
};

// Logic for the "Melhor Opção" card
const calculateBestOptionCombinations = (): BestTripCombination[] => {
    const portoSeguroItineraries = initialItineraries.filter(it => it.title.includes('Porto Seguro'));
    const portoSeguroAccommodations = detailedRoutes[18]?.accommodations || [];

    const departureFlights = portoSeguroItineraries.filter(it => it.title.includes('Rio de Janeiro →'));
    const returnFlights = portoSeguroItineraries.filter(it => it.title.includes('Porto Seguro →'));

    if (departureFlights.length === 0 || returnFlights.length === 0 || portoSeguroAccommodations.length === 0) {
        return [];
    }

    // --- 1. Menor Preço ---
    const cheapestDeparture = departureFlights.reduce((prev, curr) => prev.totalPrice < curr.totalPrice ? prev : curr);
    const cheapestReturn = returnFlights.reduce((prev, curr) => prev.totalPrice < curr.totalPrice ? prev : curr);
    // For shortest stay, find the return flight closest to the departure date
    const departureDate = new Date(2025, 11, parseInt(cheapestDeparture.events[0].startDate.split('/')[0]));
    const closestReturn = returnFlights.sort((a, b) => {
        const dateA = new Date(2025, 11, parseInt(a.events[0].startDate.split('/')[0]));
        const dateB = new Date(2025, 11, parseInt(b.events[0].startDate.split('/')[0]));
        return Math.abs(dateA.getTime() - departureDate.getTime()) - Math.abs(dateB.getTime() - departureDate.getTime());
    })[0];
    
    const cheapestAccommodation = portoSeguroAccommodations.reduce((prev, curr) => prev.pricePerNight < curr.pricePerNight ? prev : curr);
    
    // Calculate duration for accommodation price
    const depDay = parseInt(cheapestDeparture.events[0].startDate.split('/')[0]);
    const retDay = parseInt(closestReturn.events[0].startDate.split('/')[0]);
    const nightsCheapest = Math.max(1, retDay - depDay);
    
    const menorPreco: BestTripCombination = {
        type: 'Menor Preço',
        departureFlight: cheapestDeparture,
        returnFlight: closestReturn,
        accommodation: cheapestAccommodation,
        totalCost: cheapestDeparture.totalPrice + closestReturn.totalPrice + (cheapestAccommodation.pricePerNight * nightsCheapest),
    };

    // --- 2. Melhor Custo-Benefício ---
    // Criteria: direct flights, good times, well-rated hotel
    const bestValueDeparture = departureFlights
        .filter(f => f.events[0].details === 'Sem escalas' && parseInt(f.events[0].startTime.split(':')[0]) > 8)
        .sort((a,b) => a.totalPrice - b.totalPrice)[0] || cheapestDeparture; // Fallback
        
    const bestValueReturn = returnFlights
        .filter(f => f.events[0].details === 'Sem escalas' && parseInt(f.events[0].startTime.split(':')[0]) > 16)
        .sort((a,b) => a.totalPrice - b.totalPrice)[0] || closestReturn; // Fallback

    const bestValueAccommodation = portoSeguroAccommodations
        .filter(a => a.rating >= 8.5)
        .sort((a,b) => a.pricePerNight - b.pricePerNight)[0] || cheapestAccommodation; // Fallback
        
    const depDayBest = parseInt(bestValueDeparture.events[0].startDate.split('/')[0]);
    const retDayBest = parseInt(bestValueReturn.events[0].startDate.split('/')[0]);
    const nightsBestValue = Math.max(1, retDayBest - depDayBest);

    const custoBeneficio: BestTripCombination = {
        type: 'Melhor Custo-Benefício',
        departureFlight: bestValueDeparture,
        returnFlight: bestValueReturn,
        accommodation: bestValueAccommodation,
        totalCost: bestValueDeparture.totalPrice + bestValueReturn.totalPrice + (bestValueAccommodation.pricePerNight * nightsBestValue),
    };

    return [menorPreco, custoBeneficio];
};

const Destinations: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<{ id: number; startDate: string | null } | null>(null);

  const groupedDestinations = destinations.reduce((acc, dest) => {
    (acc[dest.category] = acc[dest.category] || []).push(dest);
    return acc;
  }, {} as Record<string, Destination[]>);

  const handleSelectDestination = (id: number, startDate: string | null) => {
    setSelectedDestination({ id, startDate });
  };

  const handleClose = () => {
    setSelectedDestination(null);
  }

  const handleNavigation = (direction: 'next' | 'prev') => {
    if (!selectedDestination) return;
    const currentCategory = destinations.find(d => d.id === selectedDestination.id)?.category;
    if (!currentCategory) return;
    
    const categoryDestinations = destinations.filter(d => d.category === currentCategory);
    const currentIndex = categoryDestinations.findIndex(d => d.id === selectedDestination.id);

    let nextDestination: Destination;
    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % categoryDestinations.length;
      nextDestination = categoryDestinations[nextIndex];
    } else {
      const prevIndex = (currentIndex - 1 + categoryDestinations.length) % categoryDestinations.length;
      nextDestination = categoryDestinations[prevIndex];
    }
    
    const tripOptions = calculateTripOptions(nextDestination);
    const startDate = tripOptions[0]?.departureFlight.events[0].startDate || null;
    setSelectedDestination({ id: nextDestination.id, startDate });
  }

  return (
    <>
      <div className="space-y-12">
        {Object.entries(groupedDestinations).map(([category, dests]) => (
          <section key={category}>
            <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-blue-400 pb-2">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {dests.map(destination => {
                // If it's the special card, calculate the smart combinations
                if (destination.id === 100) {
                   const bestCombinations = calculateBestOptionCombinations();
                   return (
                     <DestinationCard 
                        key={destination.id} 
                        destination={destination}
                        tripOptions={[]}
                        bestCombinations={bestCombinations}
                        onClick={() => { /* Maybe open a summary view later */ }}
                     />
                   )
                }
                
                // Otherwise, calculate standard trip options
                const tripOptions = calculateTripOptions(destination);
                const routeDetails = detailedRoutes[destination.id];
                const accommodationPreview = routeDetails?.accommodations?.[0];
                return (
                  <DestinationCard 
                    key={destination.id} 
                    destination={destination}
                    tripOptions={tripOptions}
                    accommodationPreview={accommodationPreview}
                    onClick={() => handleSelectDestination(destination.id, tripOptions[0]?.departureFlight.events[0].startDate || null)}
                  />
                )
              })}
            </div>
          </section>
        ))}
      </div>
      
      <DetailedItineraryView 
        selection={selectedDestination}
        onClose={handleClose}
        onNavigate={handleNavigation}
      />
    </>
  );
};

export default Destinations;