import React from 'react';
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
    carTrip?: Destination['carTrip'];
}

const MyTrips: React.FC<MyTripsProps> = ({ onSelectItinerary }) => {
    const groupedTrips: { [key: string]: GroupedTrip } = {};

    // 1. Initialize with all destinations from the "Explore" tab, especially for car trips
    destinations.forEach(dest => {
        const key = dest.title.split(' (')[0]; // Normalize key, e.g., "Natal em Porto Seguro (18/12)" -> "Natal em Porto Seguro"
        if (!groupedTrips[key]) {
            groupedTrips[key] = {
                destination: dest,
                itineraries: [],
                carTrip: dest.carTrip,
            };
        }
    });
    
    // 2. Group itineraries from itineraries.ts
    initialItineraries.forEach(itinerary => {
        let key = "Outros"; // Default group
        if (itinerary.title.includes('Porto Seguro')) {
            key = 'Natal em Porto Seguro';
        } else if (itinerary.title.includes('Paraty')) {
            key = 'Charme Histórico de Paraty';
        } else if (itinerary.title.includes('Mangaratiba → Ilha Grande')) {
            key = 'Costa Verde: Ilha Grande, Paraty & Cunha';
        }
        
        if (groupedTrips[key]) {
            // Avoid duplicating itineraries if multiple destination cards match (e.g., Porto Seguro 18/12, 19/12)
            if (!groupedTrips[key].itineraries.some(it => it.id === itinerary.id)) {
                groupedTrips[key].itineraries.push(itinerary);
            }
        } else {
            // Create a new group if it doesn't exist from the destinations list
            const firstEvent = itinerary.events[0];
            groupedTrips[key] = {
                destination: { title: key, icon: firstEvent.company.logo, themeColor: '#64748b' },
                itineraries: [itinerary],
            };
        }
    });

    // Post-processing to consolidate Porto Seguro flights under one card
    const portoSeguroKeys = Object.keys(groupedTrips).filter(k => k.includes('Porto Seguro'));
    if (portoSeguroKeys.length > 1) {
        const allPortoSeguroItineraries = portoSeguroKeys.flatMap(k => groupedTrips[k].itineraries);
        const uniqueItineraries = [...new Map(allPortoSeguroItineraries.map(item => [item.id, item])).values()];
        
        // Use the first Porto Seguro destination entry as the base
        const baseKey = portoSeguroKeys[0];
        groupedTrips[baseKey].itineraries = uniqueItineraries.sort((a,b) => a.totalPrice - b.totalPrice);
        groupedTrips[baseKey].destination.title = 'Porto Seguro'; // Generic title

        // Remove the other Porto Seguro entries
        portoSeguroKeys.slice(1).forEach(k => delete groupedTrips[k]);
    }


    const finalTrips = Object.values(groupedTrips).filter(
        trip => trip.itineraries.length > 0 || trip.carTrip
    );

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {finalTrips.map((trip, index) => (
                <DestinationTripCard 
                    key={index}
                    trip={trip}
                    onSelectItinerary={onSelectItinerary}
                />
            ))}
        </div>
    );
};

export default MyTrips;