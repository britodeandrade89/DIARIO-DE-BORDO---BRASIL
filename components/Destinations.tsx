import React, { useState } from 'react';
import { destinations } from '../destinations';
import DestinationCard from './DestinationCard';
import DetailedItineraryView from './DetailedItineraryView';
import type { Destination, Itinerary } from '../types';
import { initialItineraries } from '../itineraries';
import { detailedRoutes } from '../detailedRotes';

const normalizeStr = (str: string) => str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '');

const calculateRouteCosts = (destination: Destination) => {
    const { places, title: destTitle } = destination;
    let total = 0;
    const breakdown: { leg: string; price: number | null; note?: string }[] = [];
    const usedItineraryIds = new Set<number>();
    let startDate: string | null = null;

    for (let i = 0; i < places.length - 1; i++) {
        const origin = normalizeStr(places[i]);
        const destinationStr = normalizeStr(places[i + 1]);
        const legName = `${places[i]} → ${places[i + 1]}`;

        let foundItinerary: Itinerary | undefined;

        // Special handling for the Assunção -> Buenos Aires leg, which uses the Puerto Iguazú airport.
        if (origin === 'assuncao' && destinationStr === 'buenosaires') {
            foundItinerary = initialItineraries.find(it => {
                const title = normalizeStr(it.title);
                return title.includes(normalizeStr('puertoiguazu')) && title.includes(normalizeStr('buenosaires'));
            });
        } else {
            // Default logic to find matching itineraries
            const matchingItineraries = initialItineraries.filter(it => {
                const title = normalizeStr(it.title);
                const parts = title.split(':')[1] || title; 
                const baseMatch = (parts.includes(origin) && parts.includes(destinationStr));
            
                if (!baseMatch) return false;
            
                // Specific logic for Porto Seguro cards to select the correct outbound and inbound flights.
                if (destTitle.toLowerCase().includes('porto seguro')) {
                    const isOutboundLeg = origin === 'riodejaneiro';
            
                    // For the outbound leg, filter by the date in the destination title.
                    if (isOutboundLeg) {
                        if (destTitle.includes('(18/12)')) {
                            return it.title.includes('(18/12)');
                        }
                        if (destTitle.includes('(20/12)')) {
                            return it.title.includes('(20/12)');
                        }
                    } else { // This is the return leg (Porto Seguro -> Rio).
                        // For the return leg, we must explicitly exclude the outbound flights which have dates in their titles.
                        // This ensures we match the generic return flight.
                        if (destTitle.includes('(18/12)') || destTitle.includes('(20/12)')) {
                            return !it.title.includes('(18/12)') && !it.title.includes('(20/12)');
                        }
                    }
                }
            
                return baseMatch;
            });

            if (matchingItineraries.length > 0) {
                // Sort by price and pick the cheapest one
                foundItinerary = matchingItineraries.sort((a, b) => a.totalPrice - b.totalPrice)[0];
            }
        }
        
        if (foundItinerary) {
             // Capture the start date of the first paid leg
            if (!startDate) {
                startDate = foundItinerary.events[0]?.startDate || null;
            }
            // Se o itinerário encontrado já foi usado pelo seu valor total (ou seja, é uma ida e volta)
            if (usedItineraryIds.has(foundItinerary.id)) {
                breakdown.push({ leg: legName, price: 0, note: 'Volta Inclusa' });
            } else {
                total += foundItinerary.totalPrice;
                breakdown.push({ leg: legName, price: foundItinerary.totalPrice });
                
                // Se o itinerário cobre mais de um trecho (é uma ida e volta), marque-o como usado.
                if (foundItinerary.events.length > 1 || foundItinerary.title.includes('↔')) {
                    usedItineraryIds.add(foundItinerary.id);
                }
            }
        } else {
            breakdown.push({ leg: legName, price: null });
        }
    }
    return { total, breakdown, startDate };
};

const calculateTotalDuration = (destination: Destination): string => {
    const routeData = detailedRoutes[destination.id];
    if (!routeData || !routeData.itinerary || routeData.itinerary.length === 0) {
        return '';
    }

    const totalDays = routeData.itinerary.reduce((sum, cityPlan) => {
        const daysMatch = cityPlan.duration.match(/(\d+)/);
        if (daysMatch && daysMatch[1]) {
            return sum + parseInt(daysMatch[1], 10);
        }
        return sum;
    }, 0);

    return totalDays > 0 ? `${totalDays} dias` : '';
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
    
    const { startDate } = calculateRouteCosts(nextDestination);
    setSelectedDestination({ id: nextDestination.id, startDate });
  }

  return (
    <>
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-slate-800">Explorar Roteiros</h2>
          <p className="text-slate-500 mt-2 text-lg">Inspire-se com nossos roteiros e veja uma estimativa de custos com base nas suas passagens salvas.</p>
        </div>

        {Object.entries(groupedDestinations).map(([category, dests]) => (
          <section key={category}>
            <h3 className="text-2xl font-bold text-slate-700 mb-6 border-b-2 border-cyan-500 pb-2">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {dests.map(destination => {
                const { total, breakdown, startDate } = calculateRouteCosts(destination);
                const duration = calculateTotalDuration(destination);
                return (
                  <DestinationCard 
                    key={destination.id} 
                    destination={destination}
                    totalCost={total}
                    costBreakdown={breakdown}
                    duration={duration}
                    onClick={() => handleSelectDestination(destination.id, startDate)}
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