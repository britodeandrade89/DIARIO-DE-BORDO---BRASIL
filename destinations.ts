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
        description: 'Curta o início das festas de fim de ano nas praias paradisíacas de Porto Seguro.',
        themeColor: '#f97316', // orange-500
        icon: React.createElement(SunIcon),
    },
    {
        id: 19,
        title: "Natal em Porto Seguro (20/12)",
        category: "Férias no Brasil",
        places: ['Rio de Janeiro', 'Porto Seguro', 'Rio de Janeiro'],
        description: 'Comece a viagem um pouco mais tarde e aproveite o melhor do pré-Natal na Bahia.',
        themeColor: '#ea580c', // orange-600
        icon: React.createElement(SunIcon),
    },
];