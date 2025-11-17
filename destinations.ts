import React from 'react';
import type { Destination, AccommodationOption } from './types';
import { 
    SparklesIcon,
    ParkingIcon,
} from './components/icons';


// Acomodações em Paraty para 2 noites
const paratyAccommodations: AccommodationOption[] = [
    {
        name: "Pousada Literária de Paraty",
        city: "Paraty",
        rating: 9.5,
        pricePerNight: 1250,
        totalPrice: 2500,
        nights: 2,
        amenities: ["Piscina de luxo", "Wi-Fi Grátis", "Biblioteca", "Spa e centro de bem-estar", "Restaurante premiado"],
        pros: ["Avaliação 'Excepcional' (9.5)", "Localização perfeita no Centro Histórico", "Serviço impecável e ambiente sofisticado", "Considerada uma das melhores pousadas do Brasil"],
        cons: ["Custo muito elevado."],
        distanceToCenter: "No coração do Centro Histórico.",
        bookingUrl: "https://www.booking.com/hotel/br/pousada-literaria.pt-br.html?aid=340301&checkin=2025-12-20&checkout=2025-12-22&group_adults=2&no_rooms=1&dest_id=-661483&dest_type=city"
    },
    {
        name: "Pousada do Ouro",
        city: "Paraty",
        rating: 8.9,
        pricePerNight: 580,
        totalPrice: 1160,
        nights: 2,
        amenities: ["Piscina externa", "Café da manhã incluído", "Wi-Fi Grátis", "Bar", "Sauna"],
        pros: ["Avaliação 'Fabulosa' (8.9)", "Belo casarão colonial com piscina", "Excelente localização central", "Café da manhã muito elogiado"],
        cons: ["Pode ter ruído por ser central", "Estacionamento pode ser limitado"],
        distanceToCenter: "A 2 minutos a pé da praça principal.",
        bookingUrl: "https://www.booking.com/hotel/br/pousada-do-ouro.pt-br.html?aid=340301&checkin=2025-12-20&checkout=2025-12-22&group_adults=2&no_rooms=1&dest_id=-661483&dest_type=city"
    },
    {
        name: "Pousada Villaggio",
        city: "Paraty",
        rating: 9.1,
        pricePerNight: 350,
        totalPrice: 700,
        nights: 2,
        amenities: ["Piscina externa", "Wi-Fi Grátis", "Estacionamento grátis", "Quartos para famílias"],
        pros: ["Avaliação 'Fantástica' (9.1)", "Ótimo custo-benefício", "Ambiente tranquilo e familiar", "Perto do centro, mas fora do barulho"],
        cons: ["Decoração mais simples em comparação com as pousadas históricas."],
        distanceToCenter: "A 10 minutos a pé do Centro Histórico.",
        bookingUrl: "https://www.booking.com/hotel/br/pousada-villaggio.pt-br.html?aid=340301&checkin=2025-12-20&checkout=2025-12-22&group_adults=2&no_rooms=1&dest_id=-661483&dest_type=city"
    }
].sort((a, b) => a.pricePerNight - b.pricePerNight);


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
        accommodations: paratyAccommodations,
    },
];