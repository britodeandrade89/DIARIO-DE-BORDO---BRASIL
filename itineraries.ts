import React from 'react';
import type { Itinerary } from './types';
import { 
    LatamLogoIcon, 
    MaxMilhasLogoIcon,
    AzulLogoIcon,
    DecolarLogoIcon,
    BookingLogoIcon,
    ClickBusLogoIcon,
    CCRBarcasLogoIcon,
} from './components/icons';

export const initialItineraries: Itinerary[] = [
  {
    id: 28,
    title: 'Pousada Sakura Rio Mar',
    subtitle: '2 diárias em Ilha Grande (Abraão)',
    savedDate: '2024-07-29 21:00',
    totalPrice: 648.00,
    sourceUrl: 'https://www.booking.com/hotel/br/bella-tulip.pt-br.html',
    events: [
        {
            type: 'accommodation',
            startTime: '14:00',
            endTime: '12:00',
            startDate: '20/12/2025',
            endDate: '22/12/2025',
            startLocation: 'Ilha Grande',
            endLocation: 'Pousada Sakura Rio Mar',
            duration: '2 noites',
            details: '2 adultos',
            company: { name: 'Booking.com', logo: React.createElement(BookingLogoIcon) },
        }
    ]
  },
  {
    id: 27,
    title: 'CCR Barcas: Mangaratiba → Ilha Grande',
    subtitle: 'Passagem só de ida',
    savedDate: '2024-07-28 12:00',
    totalPrice: 20.50,
    sourceUrl: 'http://barcasrio.com.br/linhas_horarios/mangaratiba-ilha-grande/',
    events: [
      {
        type: 'ship',
        startTime: '08:00',
        endTime: '09:50',
        startDate: '20/12',
        endDate: '20/12',
        startLocation: 'Porto de Mangaratiba',
        endLocation: 'Vila do Abraão, Ilha Grande',
        duration: '1h 50m',
        details: 'Operando normalmente',
        company: { name: 'CCR Barcas', logo: React.createElement(CCRBarcasLogoIcon) },
      }
    ]
  },
  {
    id: 14,
    title: 'Azul: Rio de Janeiro → Porto Seguro (18/12)',
    subtitle: 'Só Ida · Econômica · 1 passageiro',
    savedDate: '2024-07-26 17:51',
    totalPrice: 487.00, 
    sourceUrl: 'https://www.google.com/travel/flights/search;flt=GIG.BPS.2025-12-18',
    events: [
      {
        type: 'flight',
        startTime: '06:10',
        endTime: '16:00',
        startDate: '18/12',
        endDate: '18/12',
        startLocation: 'GIG',
        endLocation: 'BPS',
        duration: '9h 50m',
        details: '1 parada (7h 25m em CNF)',
        company: { name: 'Azul', logo: React.createElement(AzulLogoIcon, { className: "h-10 w-10" }) },
        operator: 'Operado por Azul Linhas Aéreas',
      }
    ],
    baggage: {
      personal: { status: 'Inclusa', details: 'Item pessoal (bolsa ou mochila)' },
      carryOn: { status: 'Inclusa', details: '1 bagagem de mão incluída' },
      checked: { status: 'Taxa Adicional', details: 'Bagagem despachada cobrada à parte' },
    },
    bookingOptions: [
        {
            provider: 'Reserve com a Decolar',
            price: 487.00,
            url: 'https://www.google.com/travel/flights/search;flt=GIG.BPS.2025-12-18',
            logo: React.createElement(DecolarLogoIcon, { className: "h-10 w-10 p-1" })
        },
        {
            provider: 'Reserve com a Booking.com',
            price: 512.00,
            url: 'https://www.google.com/travel/flights/search;flt=GIG.BPS.2025-12-18',
            logo: React.createElement(BookingLogoIcon, { className: "h-10 w-10 p-1" })
        },
        {
            provider: 'Reserve com a maxmilhas',
            price: 653.00,
            url: 'https://www.google.com/travel/flights/search;flt=GIG.BPS.2025-12-18',
            logo: React.createElement(MaxMilhasLogoIcon, { className: "h-10 w-10 p-1", style: { borderRadius: '8px' } })
        }
    ],
    monitoring: { enabled: true },
    priceHistory: [
      { timestamp: new Date('2024-07-26T17:51:00'), price: 492.00 }, // Original LATAM
      { timestamp: new Date('2024-07-27T09:00:00'), price: 499.00 },
      { timestamp: new Date('2024-07-27T21:00:00'), price: 512.00 },
      { timestamp: new Date('2024-07-28T09:00:00'), price: 530.00 },
      { timestamp: new Date('2024-07-28T21:00:00'), price: 580.00 },
      { timestamp: new Date('2024-07-29T09:00:00'), price: 575.00 },
      { timestamp: new Date('2024-07-29T21:00:00'), price: 455.00 }, // Previous best find
      { timestamp: new Date('2024-07-30T09:00:00'), price: 487.00 }, // New price from screenshot
    ],
  },
  {
    id: 16,
    title: 'LATAM: Rio de Janeiro → Porto Seguro (20/12)',
    subtitle: 'Só Ida · Econômica · 1 passageiro',
    savedDate: '2024-07-26 17:48',
    totalPrice: 499.00,
    sourceUrl: 'https://www.google.com/travel/flights/search;flt=GIG.BPS.2025-12-20',
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
            url: 'https://www.google.com/travel/flights/search;flt=GIG.BPS.2025-12-20',
            logo: React.createElement(LatamLogoIcon, { className: "h-10 w-10" }),
            tag: 'Companhia aérea'
        },
        {
            provider: 'Reserve com a maxmilhas',
            price: 499.00,
            url: 'https://www.google.com/travel/flights/search;flt=GIG.BPS.2025-12-20',
            logo: React.createElement(MaxMilhasLogoIcon, { className: "h-10 w-10 p-1", style: { borderRadius: '8px' } })
        }
    ],
  },
  {
    id: 17,
    title: 'LATAM: Rio de Janeiro → Porto Seguro (19/12)',
    subtitle: 'Só Ida · Econômica · 1 passageiro',
    savedDate: '2024-07-26 17:50',
    totalPrice: 509.00,
    sourceUrl: 'https://www.google.com/travel/flights/search;flt=GIG.BPS.2025-12-19',
    events: [
      {
        type: 'flight',
        startTime: '23:40',
        endTime: '01:15',
        startDate: '19/12',
        endDate: '20/12',
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
            url: 'https://www.google.com/travel/flights/search;flt=GIG.BPS.2025-12-19',
            logo: React.createElement(LatamLogoIcon, { className: "h-10 w-10" }),
            tag: 'Companhia aérea'
        },
        {
            provider: 'Reserve com a maxmilhas',
            price: 509.00,
            url: 'https://www.google.com/travel/flights/search;flt=GIG.BPS.2025-12-19',
            logo: React.createElement(MaxMilhasLogoIcon, { className: "h-10 w-10 p-1", style: { borderRadius: '8px' } })
        }
    ],
  },
  {
    id: 21,
    title: 'LATAM: Porto Seguro → Rio de Janeiro (23/12)',
    subtitle: 'Só Ida · Econômica · 1 passageiro',
    savedDate: '2024-07-26 17:54',
    totalPrice: 297.00,
    sourceUrl: 'https://www.google.com/travel/flights/search;flt=BPS.GIG.2025-12-23',
    events: [{
      type: 'flight',
      startTime: '03:35',
      endTime: '05:15',
      startDate: '23/12',
      endDate: '23/12',
      startLocation: 'BPS',
      endLocation: 'GIG',
      duration: '1h 40m',
      details: 'Sem escalas',
      company: { name: 'LATAM', logo: React.createElement(LatamLogoIcon, { className: "h-10 w-10" }) },
      operator: 'Operado por Latam Airlines Brasil',
    }],
    baggage: {
      personal: { status: 'Não disponível', details: 'Item pessoal (bolsa ou mochila)' },
      carryOn: { status: 'Inclusa', details: '1 bagagem de mão incluída' },
      checked: { status: 'Taxa Adicional', details: 'Uma bagagem despachada cobrada à parte' },
    },
    bookingOptions: [
      {
        provider: 'Reserve com a LATAM',
        price: 337.00,
        url: 'https://www.google.com/travel/flights/search;flt=BPS.GIG.2025-12-23',
        logo: React.createElement(LatamLogoIcon, { className: "h-10 w-10" }),
        tag: 'Companhia aérea'
      },
      {
        provider: 'Reserve com a maxmilhas',
        price: 297.00,
        url: 'https://www.google.com/travel/flights/search;flt=BPS.GIG.2025-12-23',
        logo: React.createElement(MaxMilhasLogoIcon, { className: "h-10 w-10 p-1", style: { borderRadius: '8px' } })
      }
    ],
  },
  {
    id: 22,
    title: 'LATAM: Porto Seguro → Rio de Janeiro (24/12)',
    subtitle: 'Só Ida · Econômica · 1 passageiro',
    savedDate: '2024-07-26 17:55',
    totalPrice: 226.00,
    sourceUrl: 'https://www.google.com/travel/flights/search;flt=BPS.SDU.2025-12-24',
    events: [{
      type: 'flight',
      startTime: '14:35',
      endTime: '16:10',
      startDate: '24/12',
      endDate: '24/12',
      startLocation: 'BPS',
      endLocation: 'SDU',
      duration: '1h 35m',
      details: 'Sem escalas',
      company: { name: 'LATAM', logo: React.createElement(LatamLogoIcon, { className: "h-10 w-10" }) },
      operator: 'Operado por Latam Airlines Brasil',
    }],
     baggage: {
      personal: { status: 'Não disponível', details: 'Item pessoal (bolsa ou mochila)' },
      carryOn: { status: 'Inclusa', details: '1 bagagem de mão incluída' },
      checked: { status: 'Taxa Adicional', details: 'Uma bagagem despachada cobrada à parte' },
    },
    bookingOptions: [
      {
        provider: 'Reserve com a LATAM',
        price: 232.00,
        url: 'https://www.google.com/travel/flights/search;flt=BPS.SDU.2025-12-24',
        logo: React.createElement(LatamLogoIcon, { className: "h-10 w-10" }),
        tag: 'Companhia aérea'
      },
      {
        provider: 'Reserve com a maxmilhas',
        price: 226.00,
        url: 'https://www.google.com/travel/flights/search;flt=BPS.SDU.2025-12-24',
        logo: React.createElement(MaxMilhasLogoIcon, { className: "h-10 w-10 p-1", style: { borderRadius: '8px' } })
      }
    ],
  },
  {
    id: 26,
    title: 'ClickBus: Rio de Janeiro → Paraty',
    subtitle: 'Ida e Volta · Semi-Leito · 1 passageiro',
    savedDate: '2024-07-28 10:00',
    totalPrice: 215.80,
    sourceUrl: 'https://www.clickbus.com.br/',
    events: [
      {
        type: 'bus',
        startTime: '08:00',
        endTime: '12:30',
        startDate: '20/12',
        endDate: '20/12',
        startLocation: 'Rodoviária Novo Rio',
        endLocation: 'Rodoviária de Paraty',
        duration: '4h 30m',
        details: 'Viação Costa Verde',
        company: { name: 'ClickBus', logo: React.createElement(ClickBusLogoIcon, { className: "h-8 w-auto" }) },
      },
      {
        type: 'bus',
        startTime: '14:00',
        endTime: '18:30',
        startDate: '24/12',
        endDate: '24/12',
        startLocation: 'Rodoviária de Paraty',
        endLocation: 'Rodoviária Novo Rio',
        duration: '4h 30m',
        details: 'Viação Costa Verde',
        company: { name: 'ClickBus', logo: React.createElement(ClickBusLogoIcon, { className: "h-8 w-auto" }) },
      }
    ]
  }
];