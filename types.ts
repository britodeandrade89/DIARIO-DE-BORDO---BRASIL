// FIX: Imported the `React` namespace to resolve the "Cannot find namespace 'React'" error for the `React.ReactElement` type.
import React, { ReactNode } from 'react';

// FIX: Moved the AIStudio interface into the `declare global` block. This resolves the "Subsequent property declarations must have the same type" error by ensuring AIStudio is a true global type, preventing scope conflicts.
declare global {
  interface AIStudio {
    hasSelectedApiKey: () => Promise<boolean>;
    openSelectKey: () => Promise<void>;
  }

  interface Window {
    aistudio?: AIStudio;
  }

  // START: Added BeforeInstallPromptEvent interface for PWA installation
  interface BeforeInstallPromptEvent extends Event {
    readonly platforms: string[];
    readonly userChoice: Promise<{
      outcome: 'accepted' | 'dismissed';
      platform: string;
    }>;
    prompt(): Promise<void>;
  }
  // END: Added BeforeInstallPromptEvent interface for PWA installation
}

// FIX: Added UserConfig interface to define the shape of user configuration data.
export interface UserConfig {
  origins: string[];
  destinations: string[];
  whatsapp_numbers: string[];
  travel_period: {
    start: string;
    end: string;
    min_days: number;
    max_days: number;
  };
}

// FIX: Added Flight interface to define the shape of flight data from the Gemini API.
export interface Flight {
  origin: string;
  destination: string;
  price: number;
  airline: string;
  departure_date: string;
  return_date: string;
  baggage: string;
  route_type: 'round_trip' | 'circular';
  return_city?: string;
}

export interface Airport {
  code: string;
  name: string;
}

export type TripEventType = 'flight' | 'bus' | 'car' | 'train' | 'accommodation';

export interface TripEvent {
  type: TripEventType;
  startTime: string;
  endTime: string;
  startDate: string;
  endDate: string;
  startLocation: string;
  endLocation: string;
  duration: string;
  details: string;
  company: {
    name: string;
    logo: ReactNode;
  };
  warning?: string;
  operator?: string;
}

export interface BaggageDetail {
  status: 'Inclusa' | 'Taxa Adicional' | 'Não disponível';
  details: string;
}

export interface BaggageInfo {
  personal: BaggageDetail;
  carryOn: BaggageDetail;
  checked: BaggageDetail;
}

export interface AdditionalCost {
  description: string;
  amount: number;
  icon: ReactNode;
  details?: string;
}

export interface PriceHistoryItem {
  timestamp: Date;
  price: number;
}

export interface BookingOption {
    provider: string;
    price: number;
    url: string;
    logo?: ReactNode;
    tag?: string;
}

export interface Itinerary {
  id: number;
  title: string;
  subtitle?: string;
  savedDate: string;
  totalPrice: number;
  events: TripEvent[];
  baggage?: BaggageInfo;
  additionalCosts?: AdditionalCost[];
  bookingOptions?: BookingOption[];
  sourceUrl: string;
  monitoring?: {
    enabled: boolean;
  };
}

export interface Destination {
  id: number;
  title: string;
  category: string;
  places: string[];
  description: string;
  themeColor: string;
  icon: React.ReactElement;
}

// START: Added interfaces for detailed day-by-day itineraries
export interface DayPlan {
  day: number;
  date?: string;
  title: string;
  activities: string[];
}

export interface CityItinerary {
  city: string;
  duration: string;
  days: DayPlan[];
}

export interface AccommodationOption {
    name: string;
    rating: number;
    pricePerNight: number;
    totalPrice: number;
    nights: number;
    images: string[];
    amenities: string[];
    pros: string[];
    cons: string[];
    distanceToCenter: string;
    bookingUrl: string;
}

export interface DetailedRoute {
  id: number;
  title: string;
  itinerary: CityItinerary[];
  accommodations?: AccommodationOption[];
}
// END: Added interfaces for detailed day-by-day itineraries