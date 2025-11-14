import React from 'react';
import type { Itinerary, Destination, TripEventType, CarTripLeg } from '../types';
import { 
    PlaneTakeoffIcon, 
    BusIcon, 
    FuelIcon, 
    ShipIcon, 
    MapPinIcon,
    LocationMarkerAIcon,
    LocationMarkerBIcon,
    TollBoothIcon,
    ParkingIcon
} from './icons';

interface GroupedTrip {
    destination: Destination | { title: string; themeColor?: string, icon?: React.ReactElement };
    itineraries: Itinerary[];
    carTrips?: Destination['carTrips'];
}

interface DestinationTripCardProps {
    trip: GroupedTrip;
    onSelectItinerary: (itinerary: Itinerary) => void;
}

const getIconForType = (type: TripEventType) => {
    switch(type) {
        case 'flight': return <PlaneTakeoffIcon className="h-5 w-5 text-slate-500" />;
        case 'bus': return <BusIcon className="h-5 w-5 text-slate-500" />;
        case 'ship': return <ShipIcon className="h-5 w-5 text-slate-500" />;
        default: return <MapPinIcon className="h-5 w-5 text-slate-500" />;
    }
}

const ItineraryRow: React.FC<{ itinerary: Itinerary, onClick: () => void }> = ({ itinerary, onClick }) => {
    const firstEvent = itinerary.events[0];
    const eventIcon = getIconForType(firstEvent.type);

    return (
        <div onClick={onClick} className="p-3 -mx-3 rounded-lg flex items-center justify-between hover:bg-slate-100 transition-colors duration-200 cursor-pointer">
            <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white border">
                    {React.cloneElement(firstEvent.company.logo as React.ReactElement, { className: "h-5 w-auto" })}
                </div>
                <div>
                    <p className="font-semibold text-sm text-slate-800 truncate" title={itinerary.title}>{itinerary.title}</p>
                    <p className="text-xs text-slate-500">{firstEvent.startDate}, {firstEvent.startTime}</p>
                </div>
            </div>
            <div className="text-right">
                <p className="font-bold text-sm text-blue-700">R$ {itinerary.totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                 <p className="text-xs text-slate-500 -mt-1">por pessoa</p>
            </div>
        </div>
    );
};

const CarTripLegCard: React.FC<{ leg: CarTripLeg }> = ({ leg }) => {
    // Heuristic: one toll booth for every ~R$5. Max of 4 for visual simplicity.
    const tollCount = leg.tollCostOneWay > 0 ? Math.min(Math.round(leg.tollCostOneWay / 5), 4) : 0;

    return (
        <div className="bg-white p-4 rounded-xl shadow-md border border-slate-200 flex flex-col space-y-4">
            <h4 className="font-bold text-lg text-slate-800 text-center">
                {leg.title}
            </h4>

            {/* Schematic Route */}
            <div className="py-8 px-4 flex items-center">
                <LocationMarkerAIcon className="h-10 w-10 flex-shrink-0" />
                <div className="flex-grow flex items-center justify-center relative h-10 px-2">
                    <div className="w-full border-t-2 border-dashed border-slate-300"></div>
                    <div className="absolute inset-0 flex items-center justify-around px-4">
                        {Array.from({ length: tollCount }).map((_, i) => (
                            <div key={i} className="bg-white px-1">
                                <TollBoothIcon className="h-8 w-8 text-slate-500" />
                            </div>
                        ))}
                    </div>
                </div>
                <LocationMarkerBIcon className="h-10 w-10 flex-shrink-0" />
            </div>

            {/* Total Distance */}
            <div className="text-center -mt-8">
                <p className="text-2xl font-bold text-slate-800">
                    Total: {leg.distance}
                </p>
            </div>
            
            {/* Costs Breakdown */}
            <div className="pt-4 border-t border-slate-200/80 space-y-3">
                <div className="flex justify-between items-center text-sm">
                    <span className="flex items-center text-slate-600">
                        <FuelIcon className="h-5 w-5 mr-2 text-slate-400" />
                        Combustível
                    </span>
                    <span className="font-semibold text-slate-800">
                        R$ {leg.fuelCostOneWay.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                </div>
                
                {leg.tollCostOneWay > 0 && (
                    <div className="flex justify-between items-center text-sm">
                        <span className="flex items-center text-slate-600">
                            <ParkingIcon className="h-5 w-5 mr-2 text-slate-400" />
                            Pedágios
                        </span>
                        <span className="font-semibold text-slate-800">
                            R$ {leg.tollCostOneWay.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </span>
                    </div>
                )}

                {leg.additionalCosts && leg.additionalCosts.map((cost, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                        <span className="flex items-center text-slate-600">
                           {React.cloneElement(cost.icon as React.ReactElement, { className: "h-5 w-5 mr-2 text-slate-400" })}
                           {cost.description.includes('Estacionamento') ? 'Estacionamento' : cost.description}
                        </span>
                        <span className="font-semibold text-slate-800 text-right">
                            {cost.dailyRate ? `R$ ${cost.dailyRate.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} / dia` : ''}
                            {cost.total ? `R$ ${cost.total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}` : ''}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};


const DestinationTripCard: React.FC<DestinationTripCardProps> = ({ trip, onSelectItinerary }) => {
    const { destination, carTrips, itineraries } = trip;
    const themeColor = 'themeColor' in destination ? destination.themeColor : '#64748b';

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 flex flex-col overflow-hidden">
            <div 
                className="p-4 text-white relative"
                style={{ backgroundColor: themeColor }}
            >
                 <div className="absolute top-2 right-2 text-white/10">
                    {destination.icon && React.cloneElement(destination.icon, { className: 'h-20 w-20' })}
                </div>
                <h3 className="text-lg font-bold relative z-10 drop-shadow-sm">{destination.title}</h3>
            </div>

            <div className="p-4 flex-grow flex flex-col space-y-4">
                {carTrips && carTrips.map((leg, index) => (
                   <CarTripLegCard key={index} leg={leg} />
                ))}

                {itineraries.length > 0 && (
                    <div className="flex-grow">
                        <h4 className="font-bold text-sm text-slate-700 mb-1">
                           {itineraries.length} {itineraries.length > 1 ? 'itens salvos' : 'item salvo'}
                        </h4>
                        <div className="flex flex-col">
                            {itineraries.map(itinerary => (
                                <ItineraryRow 
                                    key={itinerary.id} 
                                    itinerary={itinerary} 
                                    onClick={() => onSelectItinerary(itinerary)}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DestinationTripCard;