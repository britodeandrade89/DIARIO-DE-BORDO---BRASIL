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
        description: 'Curta o início das festas de fim de ano com um roteiro completo de 6 dias nas praias paradisíacas de Porto Seguro.',
        themeColor: '#f97316', // orange-500
        icon: React.createElement(SunIcon),
    },
    {
        id: 20,
        title: "Natal em Porto Seguro (19/12)",
        category: "Férias no Brasil",
        places: ['Rio de Janeiro', 'Porto Seguro', 'Rio de Janeiro'],
        description: 'Uma opção intermediária para aproveitar 5 dias de praia e cultura na Bahia.',
        themeColor: '#f59e0b', // amber-500
        icon: React.createElement(SunIcon),
    },
    {
        id: 19,
        title: "Natal em Porto Seguro (20/12)",
        category: "Férias no Brasil",
        places: ['Rio de Janeiro', 'Porto Seguro', 'Rio de Janeiro'],
        description: 'Comece a viagem um pouco mais tarde e aproveite o melhor do pré-Natal na Bahia em um roteiro intenso de 4 dias.',
        themeColor: '#ea580c', // orange-600
        icon: React.createElement(SunIcon),
    },
];