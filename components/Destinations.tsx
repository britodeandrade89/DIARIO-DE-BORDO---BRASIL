import React, { useState } from 'react';
import { destinations } from '../destinations';
import DestinationCard from './DestinationCard';
import DetailedItineraryView from './DetailedItineraryView';
import type { Destination, Itinerary } from '../types';
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

const calculateTripOptions = (destination: Destination): TripOption[] => {
    const { places, title: destTitle } = destination;
    const tripOptions: TripOption[] = [];

    // 1. Find the specific departure flight for this card
    let departureFlight: Itinerary | undefined;
    const departureOrigin = normalizeStr(places[0]);
    const departureDest = normalizeStr(places[1]);
    
    const matchingDepartures = initialItineraries.filter(it => {
        const title = normalizeStr(it.title);
        const isDepartureFlight = title.includes(departureOrigin) && title.includes(departureDest);
        if (!isDepartureFlight) return false;

        // Filter by the date in the destination card's title
        if (destTitle.includes('(18/12)')) return it.title.includes('(18/12)');
        if (destTitle.includes('(19/12)')) return it.title.includes('(19/12)');
        if (destTitle.includes('(20/12)')) return it.title.includes('(20/12)');
        return false;
    });

    if (matchingDepartures.length > 0) {
        departureFlight = matchingDepartures[0];
    }

    // If no specific departure flight is found, we can't create options.
    if (!departureFlight) {
        return [];
    }

    // 2. Find all available return flights
    const returnOrigin = normalizeStr(places[1]);
    const returnDest = normalizeStr(places[2]); // The final destination in the array
    const returnFlights = initialItineraries.filter(it => {
        const title = normalizeStr(it.title);
        return title.includes(returnOrigin) && title.includes(returnDest);
    });
    
    // 3. Filter for specific return dates as requested by the user
    const validReturnFlights = returnFlights.filter(it => 
        it.events[0].startDate === '23/12' || it.events[0].startDate === '24/12'
    );

    // 4. Create trip combinations
    for (const returnFlight of validReturnFlights) {
        const departureDateStr = departureFlight.events[0].startDate;
        const returnDateStr = returnFlight.events[0].startDate;
        
        const [depDay, depMonth] = departureDateStr.split('/').map(Number);
        const [retDay, retMonth] = returnDateStr.split('/').map(Number);

        // Assume year 2025 as per itinerary data
        const depDate = new Date(2025, depMonth - 1, depDay);
        const retDate = new Date(2025, retMonth - 1, retDay);

        if (retDate <= depDate) continue; // Skip if return is before or on the same day as departure

        const diffTime = Math.abs(retDate.getTime() - depDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // +1 to make the day count inclusive

        tripOptions.push({
            returnDate: returnDateStr,
            totalCost: departureFlight.totalPrice + returnFlight.totalPrice,
            duration: `${diffDays} dias`,
            departureFlight: departureFlight,
            returnFlight: returnFlight,
        });
    }
    
    // Sort options by the lowest total cost
    return tripOptions.sort((a, b) => a.totalCost - b.totalCost);
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
        <div className="text-center">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">Explorar Roteiros</h2>
          <p className="text-slate-600 mt-2 text-lg">Inspire-se com nossos roteiros e veja uma estimativa de custos com base nas suas passagens salvas.</p>
        </div>

        {Object.entries(groupedDestinations).map(([category, dests]) => (
          <section key={category}>
            <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-red-400 pb-2">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {dests.map(destination => {
                const tripOptions = calculateTripOptions(destination);
                return (
                  <DestinationCard 
                    key={destination.id} 
                    destination={destination}
                    tripOptions={tripOptions}
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