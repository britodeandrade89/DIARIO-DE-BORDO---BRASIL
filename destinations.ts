import React from 'react';
import type { Destination } from './types';
import { 
    SunIcon,
} from './components/icons';

export const destinations: Destination[] = [
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