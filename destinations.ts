import React from 'react';
import type { Destination } from './types';
import { 
    SunIcon,
    ShipIcon,
} from './components/icons';

export const destinations: Destination[] = [
    {
        id: 23,
        title: "Verão em Angra dos Reis",
        category: "Férias no Rio de Janeiro",
        places: ['Rio de Janeiro', 'Angra dos Reis', 'Rio de Janeiro'],
        description: 'Descubra as ilhas paradisíacas e o mar cristalino de Angra. Veja opções de estadia e monte sua viagem.',
        themeColor: '#14b8a6', // teal-500
        icon: React.createElement(ShipIcon),
        carTrip: {
            duration: "aprox. 2h 56min",
            distance: "204,1 km",
            totalCostOneWay: 232.50,
            fuelCostOneWay: 207.10,
            tollCostOneWay: 25.40,
            details: "Via Avenida Brasil, Rodovia Rio-Santos"
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