import React from 'react';
import type { Itinerary } from './types';
import { 
    LatamLogoIcon, 
    BrasilSulLogoIcon,
    AguiaBrancaLogoIcon,
    MaxMilhasLogoIcon,
    AzulLogoIcon,
    DecolarLogoIcon,
    BookingLogoIcon
} from './components/icons';

export const initialItineraries: Itinerary[] = [
  {
    id: 3,
    title: 'Ônibus Brasil Sul: São Paulo → Foz do Iguaçu',
    savedDate: '2024-07-25',
    totalPrice: 199.99,
    sourceUrl: '#',
    events: [
      {
        type: 'bus',
        startTime: '13:00', endTime: '05:15', startDate: '13/01', endDate: '14/01',
        startLocation: 'São Paulo (Barra Funda)', endLocation: 'Foz do Iguaçu', duration: '16h 15m', details: 'Leito',
        company: { name: 'Brasil Sul', logo: React.createElement(BrasilSulLogoIcon, { className: "h-8 w-auto" }) },
      }
    ],
  },
  {
    id: 4,
    title: 'Ônibus Águia Branca: Rio de Janeiro → São Paulo',
    savedDate: '2024-07-25',
    totalPrice: 149.90,
    sourceUrl: '#',
    events: [
      {
        type: 'bus',
        startTime: '00:20', endTime: '07:20', startDate: '13/01', endDate: '13/01',
        startLocation: 'Rio de Janeiro (Novo Rio)', endLocation: 'São Paulo (Barra Funda)', duration: '7h', details: 'Leito',
        company: { name: 'Águia Branca', logo: React.createElement(AguiaBrancaLogoIcon, { className: "h-8 w-auto" }) },
      }
    ],
  },
  {
    id: 14,
    title: 'LATAM: Rio de Janeiro → Porto Seguro (18/12)',
    subtitle: 'Só Ida · Econômica · 1 passageiro',
    savedDate: '2024-07-26',
    totalPrice: 492.00,
    sourceUrl: 'https://www.google.com/flights',
    events: [
      {
        type: 'flight',
        startTime: '23:40',
        endTime: '01:15',
        startDate: '18/12',
        endDate: '19/12',
        startLocation: 'GIG',
        endLocation: 'BPS',
        duration: '1h 35m',
        details: 'Sem escalas',
        company: { name: 'LATAM', logo: React.createElement(LatamLogoIcon, { className: "h-10 w-10" }) },
        operator: 'Operado por Latam Airlines Brasil',
      }
    ],
    baggage: {
      personal: { status: 'Não disponível', details: 'Item pessoal (bolsa ou mochila)' },
      carryOn: { status: 'Inclusa', details: '1 bagagem de mão incluída' },
      checked: { status: 'Taxa Adicional', details: 'Uma bagagem despachada cobrada à parte' },
    },
    bookingOptions: [
        {
            provider: 'Reserve com a LATAM',
            price: 532.00,
            url: '#',
            logo: React.createElement(LatamLogoIcon, { className: "h-10 w-10" }),
            tag: 'Companhia aérea'
        },
        {
            provider: 'Reserve com a maxmilhas',
            price: 492.00,
            url: '#',
            logo: React.createElement(MaxMilhasLogoIcon, { className: "h-10 w-10 p-1", style: { borderRadius: '8px' } })
        }
    ],
  },
  {
    id: 15,
    title: 'Azul: Porto Seguro → Rio de Janeiro',
    subtitle: 'Só Ida · Econômica · 1 passageiro',
    savedDate: '2024-07-26',
    totalPrice: 316.00,
    sourceUrl: 'https://www.google.com/flights',
    events: [
      {
        type: 'flight',
        startTime: '16:30',
        endTime: '20:25',
        startDate: '24/12',
        endDate: '24/12',
        startLocation: 'BPS',
        endLocation: 'SDU',
        duration: '3h 55m',
        details: '1 parada em CNF (1h 30m)',
        company: { name: 'Azul', logo: React.createElement(AzulLogoIcon, { className: "h-10 w-10" }) },
      }
    ],
    baggage: {
      personal: { status: 'Não disponível', details: 'Item pessoal (bolsa ou mochila)' },
      carryOn: { status: 'Inclusa', details: '1 bagagem de mão incluída' },
      checked: { status: 'Taxa Adicional', details: 'Uma bagagem despachada cobrada à parte' },
    },
    bookingOptions: [
        {
            provider: 'Reserve com a Decolar',
            price: 316.00,
            url: '#',
            logo: React.createElement(DecolarLogoIcon, { className: "h-10 w-10" }),
        },
        {
            provider: 'Reserve com a Booking.com',
            price: 325.00,
            url: '#',
            logo: React.createElement(BookingLogoIcon, { className: "h-10 w-10" })
        }
    ],
  },
  {
    id: 16,
    title: 'LATAM: Rio de Janeiro → Porto Seguro (20/12)',
    subtitle: 'Só Ida · Econômica · 1 passageiro',
    savedDate: '2024-07-26',
    totalPrice: 492.00,
    sourceUrl: 'https://www.google.com/flights',
    events: [
      {
        type: 'flight',
        startTime: '23:40',
        endTime: '01:15',
        startDate: '20/12',
        endDate: '21/12',
        startLocation: 'GIG',
        endLocation: 'BPS',
        duration: '1h 35m',
        details: 'Sem escalas',
        company: { name: 'LATAM', logo: React.createElement(LatamLogoIcon, { className: "h-10 w-10" }) },
        operator: 'Operado por Latam Airlines Brasil',
      }
    ],
    baggage: {
      personal: { status: 'Não disponível', details: 'Item pessoal (bolsa ou mochila)' },
      carryOn: { status: 'Inclusa', details: '1 bagagem de mão incluída' },
      checked: { status: 'Taxa Adicional', details: 'Uma bagagem despachada cobrada à parte' },
    },
    bookingOptions: [
        {
            provider: 'Reserve com a LATAM',
            price: 532.00,
            url: '#',
            logo: React.createElement(LatamLogoIcon, { className: "h-10 w-10" }),
            tag: 'Companhia aérea'
        },
        {
            provider: 'Reserve com a maxmilhas',
            price: 492.00,
            url: '#',
            logo: React.createElement(MaxMilhasLogoIcon, { className: "h-10 w-10 p-1", style: { borderRadius: '8px' } })
        }
    ],
  },
];