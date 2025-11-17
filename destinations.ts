import React from 'react';
import type { Destination, AccommodationOption } from './types';
import { 
    SparklesIcon,
    ParkingIcon,
} from './components/icons';


export const destinations: Destination[] = [
    {
        id: 30,
        title: "Fim de Semana em Paraty & Cunha",
        category: "Sudeste",
        places: ['Rio de Janeiro', 'Paraty', 'Cunha'],
        description: 'Combine o charme colonial de Paraty com a beleza dos campos de lavanda em Cunha em um roteiro único.',
        themeColor: '#8b5cf6', // violet-500
        icon: React.createElement(SparklesIcon),
        carTrips: [
            {
                title: "Trecho 1: Rio → Paraty (Ida)",
                duration: "aprox. 4h 52min",
                distance: "296,4 km",
                totalCostOneWay: 167.90,
                fuelCostOneWay: 150.40,
                tollCostOneWay: 17.50,
                details: "Via Rodovia Rio-Santos",
                mapUrl: './assets/angra-map.svg', // Reutilizando mapa genérico da região
            },
            {
                title: "Trecho 2: Paraty ↔ Cunha (Bate-volta)",
                duration: "aprox. 1h 30min",
                distance: "94 km (total)",
                totalCostOneWay: 43.08, // Custo para ida e volta
                fuelCostOneWay: 43.08,
                tollCostOneWay: 0.00,
                details: "Via RJ-165, Rod. Salvador Pacetti",
                mapUrl: './assets/paraty-cunha-map.svg',
            },
            {
                title: "Trecho 3: Paraty → Rio (Volta)",
                duration: "aprox. 4h 52min",
                distance: "296,4 km",
                totalCostOneWay: 167.90,
                fuelCostOneWay: 150.40,
                tollCostOneWay: 17.50,
                details: "Via Rodovia Rio-Santos",
                mapUrl: './assets/paraty-santacruz-map.svg', // Reutilizando mapa de volta
            }
        ],
        accommodations: [
            {
                name: 'Pousada Bella Tulip',
                city: 'Paraty',
                rating: 9.2,
                pricePerNight: 324,
                totalPrice: 648,
                nights: 2,
                amenities: ['Wi-Fi Gratuito', 'Ar-condicionado', 'Café da manhã incluso'],
                pros: ['Localização excelente perto do Centro Histórico', 'Café da manhã muito elogiado pelos hóspedes', 'Atendimento cordial e prestativo'],
                cons: ['Quartos podem ser considerados pequenos', 'O sinal de Wi-Fi pode ser instável em alguns quartos'],
                distanceToCenter: 'a 400m do Centro Histórico',
                bookingUrl: 'https://www.booking.com/hotel/br/bella-tulip.pt-br.html?aid=340301&sid=79d0cc3ebada820ffd8e7f87c3b455c3&checkin=2025-12-20&checkout=2025-12-22&group_adults=2&no_rooms=1'
            }
        ],
    },
];