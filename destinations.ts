import React from 'react';
import type { Destination, AccommodationOption } from './types';
import { 
    SunIcon,
    ShipIcon,
    ActivityIcon,
    MountainPeakIcon,
    RouteIcon,
    ParkingIcon,
    SparklesIcon, // Added for the new card
} from './components/icons';


// START: Accommodation and additional cost data moved here from detailedRotes.ts for consolidation.
const ilhaGrandeAccommodations: AccommodationOption[] = [
    {
        name: "Pousada Sakura Rio Mar",
        city: "Ilha Grande",
        rating: 9.3,
        pricePerNight: 324,
        totalPrice: 648,
        nights: 2,
        amenities: ["Wi-Fi gratuito", "Quartos para não fumantes", "Serviço de quarto", "Quartos para famílias"],
        pros: ["Avaliação 'Fantástica' (9.3)", "Localização excelente", "Alta demanda (geralmente esgotado)", "Comodidades modernas"],
        cons: ["Preço mais elevado em comparação a outras opções da região."],
        distanceToCenter: "Localização central em Abraão, próximo ao cais.",
        bookingUrl: "https://www.booking.com/hotel/br/bella-tulip.pt-br.html?aid=340301&checkin=2025-12-20&checkout=2025-12-22&group_adults=2&no_rooms=1&dest_id=-622861&dest_type=city"
    },
    {
        name: "Pousada Oásis",
        city: "Ilha Grande",
        rating: 9.3,
        pricePerNight: 350,
        totalPrice: 700,
        nights: 2,
        amenities: ["Wi-Fi gratuito", "Quartos para não fumantes", "Ar-condicionado", "Café da manhã"],
        pros: ["Avaliação 'Fantástica' (9.3)", "Café da manhã excelente", "Localização privilegiada", "Equipe atenciosa"],
        cons: ["Pode ser barulhento por estar perto do centro", "Estrutura pode ser mais simples"],
        distanceToCenter: "A 100m da Praia do Abraão.",
        bookingUrl: "https://www.booking.com/hotel/br/pousada-oasis.pt-br.html?aid=340301&checkin=2025-12-20&checkout=2025-12-22&group_adults=2&no_rooms=1&dest_id=-622861&dest_type=city"
    },
    {
        name: "Suítes Golfo",
        city: "Ilha Grande",
        rating: 8.6,
        pricePerNight: 245,
        totalPrice: 490,
        nights: 2,
        amenities: ["Beira-mar", "Wi-Fi gratuito", "Varanda", "Ar-condicionado", "Quartos para famílias"],
        pros: ["Avaliação 'Fabulosa' (8.6)", "Localização em frente à praia com vista para o mar", "Preço competitivo"],
        cons: ["Não serve café da manhã", "A tarifa mais barata não é reembolsável"],
        distanceToCenter: "Em frente à Praia do Abraão.",
        bookingUrl: "https://www.booking.com/hotel/br/suites-golfo.pt-br.html?aid=340301&checkin=2025-12-20&checkout=2025-12-22&group_adults=2&no_rooms=1&dest_id=-622861&dest_type=city"
    }
];

const paratyAccommodationsTwoNights: AccommodationOption[] = [
    {
        name: "Pousada Entre Folhas",
        city: "Paraty",
        rating: 9.0,
        pricePerNight: 234,
        totalPrice: 492,
        nights: 2,
        amenities: ["Estacionamento grátis", "Wi-Fi Grátis", "Jardim", "Ar-condicionado", "Serviço de traslado para a praia"],
        pros: ["Avaliação 'Maravilhosa' (9.0)", "Totalmente reembolsável", "Ambiente tranquilo e cercado de natureza", "Ótimos serviços como traslado"],
        cons: ["Fica um pouco fora do centro, ideal para quem está de carro e busca sossego."],
        distanceToCenter: "A 9 min de carro do Centro Histórico.",
        bookingUrl: "https://www.booking.com/hotel/br/pousada-entre-folhas.pt-br.html?aid=340301&checkin=2025-12-22&checkout=2025-12-24&group_adults=2&no_rooms=1&dest_id=-661483&dest_type=city"
    },
    {
        name: "Pousada Camila",
        city: "Paraty",
        rating: 8.4,
        pricePerNight: 287,
        totalPrice: 604,
        nights: 2,
        amenities: ["Piscina externa", "Café da manhã incluído", "Wi-Fi Grátis", "Estacionamento", "Sala de jogos"],
        pros: ["Avaliação 'Muito boa' (8.4)", "Café da manhã bem avaliado", "Piscina e área de lazer"],
        cons: ["Preço um pouco mais elevado", "Pode exigir uma pequena caminhada para o centro histórico"],
        distanceToCenter: "A 19 min de caminhada da Igreja Matriz.",
        bookingUrl: "https://www.booking.com/hotel/br/pousada-camila.pt-br.html?aid=340301&checkin=2025-12-22&checkout=2025-12-24&group_adults=2&no_rooms=1&dest_id=-661483&dest_type=city"
    }
].sort((a, b) => a.pricePerNight - b.pricePerNight);
// END: Data move.


export const destinations: Destination[] = [
    {
        id: 100, // Unique ID for the smart suggestion card
        title: "Melhor Opção: Final de ano em Porto Seguro",
        category: "Sugestões Inteligentes",
        places: ['Rio de Janeiro', 'Porto Seguro', 'Rio de Janeiro'],
        description: 'Analisamos todos os voos e hotéis para trazer a melhor combinação de preço e custo-benefício para você.',
        themeColor: '#7c3aed', // violet-600
        icon: React.createElement(SparklesIcon),
    },
    {
        id: 26,
        title: "Opção 1: Costa Verde: Ilha Grande, Paraty & Cunha",
        category: "Sudeste",
        places: ['Maricá', 'Ilha Grande', 'Paraty', 'Cunha', 'Santa Cruz da Serra'],
        description: 'Uma jornada completa pela serra e mar, com todos os trechos de carro, paradas e custos planejados.',
        themeColor: '#0d9488', // teal-600
        icon: React.createElement(RouteIcon),
        carTrips: [
            {
                title: "Trecho 1: Maricá → Mangaratiba",
                duration: "aprox. 2h 6min",
                distance: "153,6 km",
                totalCostOneWay: 82.77,
                fuelCostOneWay: 77.97,
                tollCostOneWay: 4.80,
                details: "Via Rodovia Rio-Santos",
                mapUrl: './assets/marica-mangaratiba-map.svg',
                additionalCosts: [
                    {
                        description: "Estacionamento em Mangaratiba (em frente ao cais)",
                        dailyRate: 40.00,
                        icon: React.createElement(ParkingIcon, {className: "h-5 w-5 text-slate-400"})
                    }
                ]
            },
            {
                title: "Trecho 2: Mangaratiba → Paraty",
                duration: "aprox. 2h 51min",
                distance: "147,7 km",
                totalCostOneWay: 79.85,
                fuelCostOneWay: 74.95,
                tollCostOneWay: 4.90,
                details: "Via Rodovia Rio-Santos -- BR-101",
                mapUrl: './assets/mangaratiba-paraty-map.svg',
            },
             {
                title: "Trecho 3: Paraty ↔ Cunha (Passeio)",
                duration: "aprox. 3h 23min",
                distance: "92,2 km",
                totalCostOneWay: 46.81,
                fuelCostOneWay: 46.81,
                tollCostOneWay: 0.00,
                details: "Via RJ-165, Rod. Vice-Prefeito Salvador Pacetti",
                mapUrl: './assets/paraty-cunha-map.svg',
            },
            {
                title: "Trecho 4: Paraty → Santa Cruz da Serra (Volta)",
                duration: "aprox. 4h 3min",
                distance: "248,3 km",
                totalCostOneWay: 150.91,
                fuelCostOneWay: 126.01,
                tollCostOneWay: 24.90,
                details: "Via Rod. Rio-Santos, Arco Metropolitano",
                mapUrl: './assets/paraty-santacruz-map.svg',
            }
        ],
        // START: Added detailed costs and accommodation options
        additionalCosts: [
            {
                description: "Barca (Ida e Volta)",
                amount: 41.00,
                details: "Mangaratiba <-> Ilha Grande (por pessoa)",
                icon: React.createElement(ShipIcon, {className: "h-5 w-5 text-slate-400"})
            },
            {
                description: "Estacionamento (2 diárias)",
                amount: 80.00,
                details: "Estacionamento em Mangaratiba (em frente ao cais)",
                icon: React.createElement(ParkingIcon, {className: "h-5 w-5 text-slate-400"})
            }
        ],
        accommodations: [
            ...ilhaGrandeAccommodations,
            ...paratyAccommodationsTwoNights
        ],
        // END: Added details
    },
    {
        id: 25,
        title: "Opção 2: Natureza e Arte em Cunha",
        category: "Sudeste",
        places: ['Rio de Janeiro', 'Cunha', 'Rio de Janeiro'],
        description: 'Explore os ateliês de cerâmica, cachoeiras e campos de lavanda desta cidade serrana em SP.',
        themeColor: '#84cc16', // lime-500
        icon: React.createElement(MountainPeakIcon),
        carTrips: [{
            title: "Rio de Janeiro ↔ Cunha",
            duration: "aprox. 4h 55min",
            distance: "354,2 km",
            totalCostOneWay: 213.72,
            fuelCostOneWay: 179.72,
            tollCostOneWay: 34.00,
            details: "Via Rodovia Presidente Dutra, Rodovia Paulo Virgínio",
            mapUrl: './assets/angra-map.svg'
        }]
    },
     {
        id: 24,
        title: "Opção 3: Charme Histórico de Paraty",
        category: "Sudeste",
        places: ['Rio de Janeiro', 'Paraty', 'Rio de Janeiro'],
        description: 'Explore o centro histórico colonial e as praias paradisíacas de Paraty. Uma viagem no tempo.',
        themeColor: '#16a34a', // green-600
        icon: React.createElement(ActivityIcon),
        carTrips: [{
            title: "Rio de Janeiro ↔ Paraty",
            duration: "aprox. 4h 52min",
            distance: "296,4 km",
            totalCostOneWay: 167.90,
            fuelCostOneWay: 150.40,
            tollCostOneWay: 17.50,
            details: "Via Avenida Brasil, Rodovia Rio-Santos",
            mapUrl: './assets/angra-map.svg'
        }]
    },
    {
        id: 23,
        title: "Opção 4: Verão em Angra dos Reis",
        category: "Sudeste",
        places: ['Rio de Janeiro', 'Angra dos Reis', 'Rio de Janeiro'],
        description: 'Descubra as ilhas paradisíacas e o mar cristalino de Angra. Veja opções de estadia e monte sua viagem.',
        themeColor: '#14b8a6', // teal-500
        icon: React.createElement(ShipIcon),
        carTrips: [{
            title: "Rio de Janeiro ↔ Angra dos Reis",
            duration: "aprox. 5h 51min",
            distance: "408,1 km",
            totalCostOneWay: 232.50,
            fuelCostOneWay: 207.10,
            tollCostOneWay: 25.40,
            details: "Via Avenida Brasil, Rodovia Rio-Santos",
            mapUrl: './assets/angra-map.svg'
        }]
    },
    {
        id: 18,
        title: "Natal em Porto Seguro (18/12)",
        category: "Nordeste",
        places: ['Rio de Janeiro', 'Porto Seguro', 'Rio de Janeiro'],
        description: 'Combine esta data de ida com as melhores opções de volta e planeje sua viagem para o paraíso baiano.',
        themeColor: '#f97316', // orange-500
        icon: React.createElement(SunIcon),
    },
    {
        id: 19,
        title: "Natal em Porto Seguro (19/12)",
        category: "Nordeste",
        places: ['Rio de Janeiro', 'Porto Seguro', 'Rio de Janeiro'],
        description: 'Combine esta data de ida com as melhores opções de volta e planeje sua viagem para o paraíso baiano.',
        themeColor: '#f59e0b', // amber-500
        icon: React.createElement(SunIcon),
    },
    {
        id: 20,
        title: "Natal em Porto Seguro (20/12)",
        category: "Nordeste",
        places: ['Rio de Janeiro', 'Porto Seguro', 'Rio de Janeiro'],
        description: 'Combine esta data de ida com as melhores opções de volta e planeje sua viagem para o paraíso baiano.',
        themeColor: '#ea580c', // orange-600
        icon: React.createElement(SunIcon),
    },
];