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
    GolLogoIcon,
    TripLogoIcon,
    ExpediaLogoIcon,
    ViajaNetLogoIcon,
    ZupperLogoIcon,
    KiwiLogoIcon,
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