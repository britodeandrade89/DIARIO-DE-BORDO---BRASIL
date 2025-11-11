import React from 'react';
import type { Itinerary, TripEvent, BookingOption } from '../types';
import { CloseIcon, BaggageIcon, BackpackIcon, SuitcaseIcon } from './icons';

const EventRow: React.FC<{ event: TripEvent }> = ({ event }) => (
    <div className="bg-white p-4 rounded-lg border border-slate-200">
        <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-slate-100">
                {React.cloneElement(event.company.logo as React.ReactElement, { className: "h-8 w-auto" })}
            </div>
            <div className="flex-1 grid grid-cols-3 items-center gap-4">
                <div className="font-semibold text-slate-700">
                    <p>{event.startTime} - {event.endTime} <span className="text-red-500 text-xs">{event.endDate !== event.startDate ? '+1' : ''}</span></p>
                    <p className="text-sm text-slate-500 font-normal">{event.company.name}</p>
                </div>
                <div className="text-sm text-slate-600 text-center">
                    <p>{event.duration}</p>
                     <p className="text-xs text-slate-400">{event.startLocation}-{event.endLocation}</p>
                </div>
                 <div className="text-sm text-slate-600 text-right">
                    <p>{event.details}</p>
                     <p className="text-xs text-slate-400">86 kg de CO2e</p>
                </div>
            </div>
        </div>
        {event.operator && <p className="text-xs text-slate-400 mt-2 pl-16">{event.operator}</p>}
    </div>
);

const BaggageItem: React.FC<{ status: 'Inclusa' | 'Taxa Adicional' | 'Não disponível'; details: string; icon: React.ReactNode }> = ({ status, details, icon }) => (
    <div className="flex items-start space-x-3 text-sm">
        <div className="text-slate-500 mt-0.5">{icon}</div>
        <div>
            <p className="text-slate-800">{details}</p>
            <p className={`font-semibold ${status === 'Inclusa' ? 'text-green-600' : 'text-slate-600'}`}>{status}</p>
        </div>
    </div>
);

const BookingRow: React.FC<{ option: BookingOption }> = ({ option }) => (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-200 hover:bg-slate-50/50 transition-colors">
        <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                 {option.logo}
            </div>
            <div>
                 <p className="font-semibold text-slate-700">{option.provider}</p>
                 {option.tag && <p className="text-xs text-slate-500 bg-slate-200 px-2 py-0.5 rounded-full inline-block mt-1">{option.tag}</p>}
            </div>
        </div>
        <div className="flex items-center space-x-6">
            <p className="text-lg font-bold text-slate-800">R$ {option.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
            <a href={option.url} target="_blank" rel="noopener noreferrer" className="bg-slate-800 text-white font-semibold px-6 py-2 rounded-lg hover:bg-slate-700 transition-colors text-sm">
                Continuar
            </a>
        </div>
    </div>
);


const ItineraryDetailsModal: React.FC<{ itinerary: Itinerary | null; onClose: () => void; }> = ({ itinerary, onClose }) => {
    if (!itinerary) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black/60 z-40 transition-opacity" onClick={onClose} />
            <div className="fixed top-0 right-0 h-full w-full max-w-3xl bg-slate-100 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col">
                <header className="flex items-center justify-between p-4 bg-white border-b border-slate-200 flex-shrink-0">
                    <div>
                        <h2 className="text-xl font-bold text-slate-800">{itinerary.title}</h2>
                        <p className="text-sm text-slate-500">{itinerary.subtitle}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="text-right">
                             <p className="text-xs text-slate-500">Menor preço total</p>
                             <p className="text-2xl font-extrabold text-slate-800">R$ {itinerary.totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                        </div>
                        <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors">
                            <CloseIcon className="h-6 w-6" />
                        </button>
                    </div>
                </header>
                
                <main className="flex-grow overflow-y-auto p-6 space-y-6">
                    <section>
                        <h3 className="text-lg font-semibold text-slate-700 mb-3">Voo selecionado</h3>
                        <div className="space-y-4">
                            {itinerary.events.map((event, index) => <EventRow key={index} event={event} />)}
                        </div>
                    </section>

                    {itinerary.baggage && (
                        <section>
                            <div className="bg-white p-4 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-4">
                               <BaggageItem status={itinerary.baggage.personal.status} details="Item pessoal" icon={<BackpackIcon className="h-5 w-5"/>} />
                               <BaggageItem status={itinerary.baggage.carryOn.status} details={itinerary.baggage.carryOn.details} icon={<BaggageIcon className="h-5 w-5"/>} />
                               <BaggageItem status={itinerary.baggage.checked.status} details={itinerary.baggage.checked.details} icon={<SuitcaseIcon className="h-5 w-5"/>} />
                            </div>
                        </section>
                    )}
                    
                    {itinerary.bookingOptions && itinerary.bookingOptions.length > 0 && (
                        <section>
                            <h3 className="text-lg font-semibold text-slate-700 mb-3">Opções de reserva</h3>
                            <div className="space-y-3">
                                {itinerary.bookingOptions.map((opt, index) => <BookingRow key={index} option={opt} />)}
                            </div>
                        </section>
                    )}

                </main>
            </div>
        </>
    );
};

export default ItineraryDetailsModal;
