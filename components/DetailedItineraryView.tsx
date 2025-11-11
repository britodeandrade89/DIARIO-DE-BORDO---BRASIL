import React, { useState } from 'react';
import type { Destination, AccommodationOption } from '../types';
import { detailedRoutes } from '../detailedRotes';
import { 
    CloseIcon, 
    ChevronLeftIcon, 
    ChevronRightIcon, 
    CalendarIcon, 
    MapPinIcon, 
    StarIcon,
    ThumbsUpIcon,
    ThumbsDownIcon,
    WifiIcon,
    ExternalLinkIcon
} from './icons';

interface DetailedItineraryViewProps {
  selection: { id: number; startDate: string | null } | null;
  onClose: () => void;
  onNavigate: (direction: 'next' | 'prev') => void;
}

const AccommodationCard: React.FC<{ option: AccommodationOption }> = ({ option }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % option.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + option.images.length) % option.images.length);
    };

    return (
        <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
            <div className="relative">
                <img 
                    src={option.images[currentImageIndex]} 
                    alt={option.name} 
                    className="w-full h-56 object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {option.images.length > 1 && (
                     <>
                        <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-1.5 rounded-full text-slate-800 hover:bg-white transition">
                            <ChevronLeftIcon className="h-5 w-5" />
                        </button>
                        <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-1.5 rounded-full text-slate-800 hover:bg-white transition">
                            <ChevronRightIcon className="h-5 w-5" />
                        </button>
                    </>
                )}
               
                <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-xl font-bold">{option.name}</h4>
                    <div className="flex items-center space-x-1 mt-1">
                        <StarIcon className="h-5 w-5 text-yellow-400" />
                        <span className="font-semibold">{option.rating > 0 ? option.rating.toFixed(1) : 'Novo'}</span>
                        {option.rating > 0 && <span className="text-sm text-white/90">Muito bom</span>}
                    </div>
                </div>
            </div>

            <div className="p-5">
                <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-200">
                    <div>
                        <p className="text-2xl font-bold text-slate-800">
                            R$ {option.pricePerNight.toLocaleString('pt-BR')}
                            <span className="text-sm font-normal text-slate-500"> / noite</span>
                        </p>
                         <p className="text-sm text-slate-500">
                            Total: <span className="font-semibold text-slate-700">R$ {option.totalPrice.toLocaleString('pt-BR')}</span> para {option.nights} noites
                        </p>
                    </div>
                    <a href={option.bookingUrl} target="_blank" rel="noopener noreferrer" className="bg-cyan-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-cyan-700 transition-colors text-sm flex items-center space-x-2">
                        <span>Reservar Agora</span>
                        <ExternalLinkIcon className="h-4 w-4" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    {/* Pros */}
                    <div>
                        <h5 className="font-semibold text-slate-800 mb-2 flex items-center"><ThumbsUpIcon className="h-5 w-5 mr-2 text-green-500"/> Prós</h5>
                        <ul className="space-y-1.5 list-disc list-inside text-sm text-slate-600">
                            {option.pros.map((pro, i) => <li key={i}>{pro}</li>)}
                        </ul>
                    </div>
                    {/* Cons */}
                    <div>
                        <h5 className="font-semibold text-slate-800 mb-2 flex items-center"><ThumbsDownIcon className="h-5 w-5 mr-2 text-red-500"/> Contras</h5>
                         <ul className="space-y-1.5 list-disc list-inside text-sm text-slate-600">
                            {option.cons.map((con, i) => <li key={i}>{con}</li>)}
                        </ul>
                    </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-200">
                     <h5 className="font-semibold text-slate-800 mb-2">Localização e Comodidades</h5>
                     <div className="text-sm text-slate-600 space-y-2">
                        <p className="flex items-center"><MapPinIcon className="h-4 w-4 mr-2 text-slate-400"/> {option.distanceToCenter}</p>
                        <p className="flex items-center"><WifiIcon className="h-4 w-4 mr-2 text-slate-400"/> {option.amenities.join(' · ')}</p>
                     </div>
                </div>

            </div>
        </div>
    );
};

const DetailedItineraryView: React.FC<DetailedItineraryViewProps> = ({ selection, onClose, onNavigate }) => {
  if (!selection) {
    return null;
  }

  const { id: destinationId, startDate } = selection;
  const routeData = detailedRoutes[destinationId];
  
  const getTripDate = (baseDateStr: string | null, dayOffset: number): string => {
    if (!baseDateStr) return 'Data a definir';
    
    const [day, month] = baseDateStr.split('/').map(Number);
    // As viagens de Dezembro são em 2025, e as de Janeiro em 2026, conforme o travel_period.
    const year = (month === 12) ? 2025 : 2026;

    const date = new Date(year, month - 1, day);
    date.setDate(date.getDate() + dayOffset);
    
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${destinationId !== null ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Sliding Panel */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-2xl bg-slate-50 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${destinationId !== null ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <header className="flex items-center justify-between p-4 bg-white border-b border-slate-200 flex-shrink-0">
            <h2 className="text-xl font-bold text-slate-800">{routeData?.title || 'Carregando...'}</h2>
            <div className="flex items-center space-x-2">
               <button onClick={() => onNavigate('prev')} className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors">
                 <ChevronLeftIcon className="h-6 w-6" />
               </button>
               <button onClick={() => onNavigate('next')} className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors">
                 <ChevronRightIcon className="h-6 w-6" />
               </button>
               <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors">
                 <CloseIcon className="h-6 w-6" />
               </button>
            </div>
          </header>

          {/* Content */}
          <div className="flex-grow overflow-y-auto p-6 space-y-8">
            {routeData ? (
              <>
                {routeData.itinerary.map((cityPlan, cityIndex) => (
                  <section key={cityIndex}>
                    <div className="flex items-baseline space-x-3 mb-4">
                       <h3 className="text-2xl font-extrabold text-cyan-700">{cityPlan.city}</h3>
                       <span className="text-sm font-semibold text-slate-500 bg-slate-200 px-2 py-0.5 rounded">{cityPlan.duration}</span>
                    </div>
                    <div className="space-y-6 border-l-2 border-slate-200 ml-3 pl-8">
                      {cityPlan.days.map((dayPlan, dayIndex) => (
                        <div key={dayIndex} className="relative">
                          <div className="absolute -left-[38px] top-1 h-3 w-3 rounded-full bg-cyan-500 ring-4 ring-slate-50"></div>
                          <p className="font-bold text-slate-700">{dayPlan.title} <span className="font-normal text-slate-500 text-sm">- {getTripDate(startDate, dayPlan.day - 1)}</span></p>
                          <ul className="mt-2 space-y-1.5 list-disc list-inside text-slate-600">
                            {dayPlan.activities.map((activity, actIndex) => (
                              <li key={actIndex}>{activity}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>
                ))}

                {routeData.accommodations && routeData.accommodations.length > 0 && (
                  <section>
                    <div className="flex items-baseline space-x-3 mb-4">
                       <h3 className="text-2xl font-extrabold text-orange-600">Opções de Hospedagem</h3>
                    </div>
                    <div className="space-y-6">
                        {routeData.accommodations.map((option, index) => (
                            <AccommodationCard key={index} option={option} />
                        ))}
                    </div>
                  </section>
                )}
              </>
            ) : (
              <p>Roteiro não encontrado.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedItineraryView;