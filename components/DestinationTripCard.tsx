import React from 'react';
import type { Itinerary, Destination, TripEventType } from '../types';
import { PlaneTakeoffIcon, BusIcon, FuelIcon, TollIcon, CarIcon, ShipIcon, MapPinIcon } from './icons';

interface GroupedTrip {
    destination: Destination | { title: string; themeColor?: string, icon?: React.ReactElement };
    itineraries: Itinerary[];
    carTrip?: Destination['carTrip'];
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

const DestinationTripCard: React.FC<DestinationTripCardProps> = ({ trip, onSelectItinerary }) => {
    const { destination, carTrip, itineraries } = trip;
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
                {carTrip && (
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <h4 className="font-bold text-sm text-slate-700 mb-3 flex items-center">
                            <CarIcon className="h-5 w-5 mr-2 text-slate-500"/>
                            Viagem de Carro
                        </h4>
                        
                        <img src={destination.title.includes('Angra') ? "./assets/angra-map.svg" : "./assets/marica-mangaratiba-map.svg"} alt={`Mapa da rota para ${destination.title}`} className="rounded-md mb-3" />

                        
                        <div className="text-center text-slate-800">
                             <p className="text-2xl font-bold">
                                R$ {(carTrip.totalCostOneWay).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                             </p>
                             <p className="text-xs text-slate-500 -mt-1">Custo estimado do trecho</p>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mt-3 text-sm">
                            <div className="flex items-center space-x-2">
                                <FuelIcon className="h-5 w-5 text-slate-400"/>
                                <div>
                                    <p className="font-semibold text-slate-700">R$ {carTrip.fuelCostOneWay.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                                    <p className="text-xs text-slate-500">Combustível</p>
                                </div>
                            </div>
                             <div className="flex items-center space-x-2">
                                <TollIcon className="h-5 w-5 text-slate-400"/>
                                <div>
                                    <p className="font-semibold text-slate-700">R$ {carTrip.tollCostOneWay.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                                    <p className="text-xs text-slate-500">Pedágios</p>
                                </div>
                            </div>
                        </div>

                        {carTrip.additionalCosts && carTrip.additionalCosts.length > 0 && (
                            <div className="mt-4 pt-3 border-t border-slate-200">
                                {carTrip.additionalCosts.map((cost, index) => (
                                    <div key={index} className="flex items-center space-x-2 text-sm">
                                        {cost.icon}
                                        <div>
                                            <p className="font-semibold text-slate-700">
                                                {cost.dailyRate ? `R$ ${cost.dailyRate.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} (diária)` : ''}
                                            </p>
                                            <p className="text-xs text-slate-500">{cost.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

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