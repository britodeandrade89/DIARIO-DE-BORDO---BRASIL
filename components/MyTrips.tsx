import React, { useState } from 'react';
import { initialItineraries } from '../itineraries';
import { destinations } from '../destinations';
import type { Itinerary, Destination } from '../types';
import DestinationTripCard from './DestinationTripCard';

interface MyTripsProps {
    onSelectItinerary: (itinerary: Itinerary) => void;
}

interface GroupedTrip {
    destination: Destination | { title: string; themeColor?: string, icon?: React.ReactElement };
    itineraries: Itinerary[];
    carTrips?: Destination['carTrips'];
}

const MyTrips: React.FC<MyTripsProps> = ({ onSelectItinerary }) => {
    // FIX: Expanded the first trip card by default for better user experience.
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    const groupedTrips: { [key: string]: GroupedTrip } = {};

    // 1. Initialize groups from all destinations.
    // For destinations with dates in the title (like Porto Seguro), this creates a single
    // group with a clean title, using the first destination found as a template.
    destinations.forEach(dest => {
        const key = dest.title.split(' (')[0]; 
        if (!groupedTrips[key]) {
            groupedTrips[key] = {
                destination: { ...dest, title: key }, // Use the clean key as the new title
                itineraries: [],
                carTrips: dest.carTrips,
            };
        }
    });
    
    // 2. Group itineraries from itineraries.ts into the prepared groups.
    initialItineraries.forEach(itinerary => {
        let key = "Outros"; // Default group
        if (itinerary.title.includes('Porto Seguro')) {
            key = 'Natal em Porto Seguro';
        } else if (itinerary.title.includes('Paraty') || itinerary.title.includes('Mangaratiba') || itinerary.title.includes('Sakura Rio Mar')) {
            key = 'Costa Verde: Ilha Grande, Paraty & Cunha';
        }
        
        // Find or create the group. This handles cases where an itinerary doesn't match a predefined destination.
        if (!groupedTrips[key]) {
            const firstEvent = itinerary.events[0];
            groupedTrips[key] = {
                destination: { title: key, icon: firstEvent.company.logo, themeColor: '#64748b' },
                itineraries: [],
            };
        }
         // Avoid duplicating itineraries if multiple destination cards match (e.g., Porto Seguro 18/12, 19/12)
        if (!groupedTrips[key].itineraries.some(it => it.id === itinerary.id)) {
            groupedTrips[key].itineraries.push(itinerary);
        }
    });

    const finalTrips = Object.values(groupedTrips)
      .filter(trip => (trip.itineraries && trip.itineraries.length > 0) || (trip.carTrips && trip.carTrips.length > 0))
      // Sort itineraries within each trip by price
      .map(trip => ({...trip, itineraries: trip.itineraries.sort((a, b) => a.totalPrice - b.totalPrice)}));

    return (
        <div className="space-y-4">
            {finalTrips.map((trip, index) => (
                <DestinationTripCard 
                    key={index}
                    trip={trip}
                    onSelectItinerary={onSelectItinerary}
                    isExpanded={expandedIndex === index}
                    onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
                />
            ))}
        </div>
    );
};

export default MyTrips;