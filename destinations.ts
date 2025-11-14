import React from 'react';
import type { Destination } from './types';
import { 
    SunIcon,
    ShipIcon,
    ActivityIcon,
    MountainPeakIcon,
    RouteIcon,
    ParkingIcon,
    ChurchIcon,
    LavenderIcon,
    HomeIcon,
} from './components/icons';

export const destinations: Destination[] = [
    {
        id: 26,
        title: "Costa Verde: Ilha Grande, Paraty & Cunha",
        category: "Roteiros Personalizados",
        places: ['Maricá', 'Mangaratiba', 'Ilha Grande', 'Paraty', 'Cunha'],
        description: 'Uma jornada pela serra e mar, combinando ilhas paradisíacas, charme colonial e a tranquilidade das montanhas.',
        themeColor: '#0d9488', // teal-600
        icon: React.createElement(RouteIcon),
        carTrip: {
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
        }
    },
     {
        id: 27,
        title: "Próxima Parada: Paraty",
        category: "Roteiros Personalizados",
        places: ['Mangaratiba', 'Paraty'],
        description: 'Continue a jornada pela Costa Verde, explorando as ruas de pedra e o mar de Paraty.',
        themeColor: '#10b981', // emerald-500
        icon: React.createElement(ChurchIcon),
        carTrip: {
            duration: "aprox. 2h 51min",
            distance: "147,7 km",
            totalCostOneWay: 84.55,
            fuelCostOneWay: 74.95,
            tollCostOneWay: 9.60,
            details: "Via Rodovia Rio-Santos -- BR-101",
            mapUrl: './assets/mangaratiba-paraty-map.svg',
        }
    },
    {
        id: 28,
        title: "Subindo a Serra para Cunha",
        category: "Roteiros Personalizados",
        places: ['Paraty', 'Cunha'],
        description: 'A última etapa da viagem, trocando o mar pela tranquilidade e os campos de lavanda da serra de Cunha.',
        themeColor: '#8b5cf6', // violet-500
        icon: React.createElement(LavenderIcon),
        carTrip: {
            duration: "aprox. 3h 23min",
            distance: "92,2 km",
            totalCostOneWay: 46.81,
            fuelCostOneWay: 46.81,
            tollCostOneWay: 0.00,
            details: "Via RJ-165, Rod. Vice-Prefeito Salvador Pacetti",
            mapUrl: './assets/paraty-cunha-map.svg',
        }
    },
    {
        id: 29,
        title: "Retorno para Casa: Santa Cruz da Serra",
        category: "Roteiros Personalizados",
        places: ['Paraty', 'Santa Cruz da Serra'],
        description: 'A rota final da sua aventura pela Costa Verde, voltando para casa pela Rio-Santos e Arco Metropolitano.',
        themeColor: '#475569', // slate-600
        icon: React.createElement(HomeIcon),
        carTrip: {
            duration: "aprox. 4h 3min",
            distance: "248,3 km",
            totalCostOneWay: 150.91,
            fuelCostOneWay: 126.01,
            tollCostOneWay: 24.90,
            details: "Via Rod. Rio-Santos, Arco Metropolitano",
            mapUrl: './assets/paraty-santacruz-map.svg',
        }
    },
    {
        id: 25,
        title: "Natureza e Arte em Cunha",
        category: "Destinos Próximos ao Rio",
        places: ['Rio de Janeiro', 'Cunha', 'Rio de Janeiro'],
        description: 'Explore os ateliês de cerâmica, cachoeiras e campos de lavanda desta cidade serrana em SP.',
        themeColor: '#84cc16', // lime-500
        icon: React.createElement(MountainPeakIcon),
        carTrip: {
            duration: "aprox. 4h 55min",
            distance: "354,2 km",
            totalCostOneWay: 213.72,
            fuelCostOneWay: 179.72,
            tollCostOneWay: 34.00,
            details: "Via Rodovia Presidente Dutra, Rodovia Paulo Virgínio",
            mapUrl: './assets/angra-map.svg'
        }
    },
    {
        id: 24,
        title: "Charme Histórico de Paraty",
        category: "Destinos Próximos ao Rio",
        places: ['Rio de Janeiro', 'Paraty', 'Rio de Janeiro'],
        description: 'Explore o centro histórico colonial e as praias paradisíacas de Paraty. Uma viagem no tempo.',
        themeColor: '#16a34a', // green-600
        icon: React.createElement(ActivityIcon),
        carTrip: {
            duration: "aprox. 4h 52min",
            distance: "296,4 km",
            totalCostOneWay: 167.90,
            fuelCostOneWay: 150.40,
            tollCostOneWay: 17.50,
            details: "Via Avenida Brasil, Rodovia Rio-Santos",
            mapUrl: './assets/angra-map.svg'
        }
    },
    {
        id: 23,
        title: "Verão em Angra dos Reis",
        category: "Destinos Próximos ao Rio",
        places: ['Rio de Janeiro', 'Angra dos Reis', 'Rio de Janeiro'],
        description: 'Descubra as ilhas paradisíacas e o mar cristalino de Angra. Veja opções de estadia e monte sua viagem.',
        themeColor: '#14b8a6', // teal-500
        icon: React.createElement(ShipIcon),
        carTrip: {
            duration: "aprox. 5h 51min",
            distance: "408,1 km",
            totalCostOneWay: 232.50,
            fuelCostOneWay: 207.10,
            tollCostOneWay: 25.40,
            details: "Via Avenida Brasil, Rodovia Rio-Santos",
            mapUrl: './assets/angra-map.svg'
        }
    },
    {
        id: 18,
        title: "Natal em Porto Seguro (18/12)",
        category: "Férias no Brasil",
        places: ['Rio de Janeiro', 'Porto Seguro', 'Rio de Janeiro'],
        description: 'Combine esta data de ida com as melhores opções de volta e planeje sua viagem para o paraíso baiano.',
        themeColor: '#f97316', // orange-500
        icon: React.createElement(SunIcon),
    },
    {
        id: 20,
        title: "Natal em Porto Seguro (19/12)",
        category: "Férias no Brasil",
        places: ['Rio de Janeiro', 'Porto Seguro', 'Rio de Janeiro'],
        description: 'Combine esta data de ida com as melhores opções de volta e planeje sua viagem para o paraíso baiano.',
        themeColor: '#f59e0b', // amber-500
        icon: React.createElement(SunIcon),
    },
    {
        id: 19,
        title: "Natal em Porto Seguro (20/12)",
        category: "Férias no Brasil",
        places: ['Rio de Janeiro', 'Porto Seguro', 'Rio de Janeiro'],
        description: 'Combine esta data de ida com as melhores opções de volta e planeje sua viagem para o paraíso baiano.',
        themeColor: '#ea580c', // orange-600
        icon: React.createElement(SunIcon),
    },
];