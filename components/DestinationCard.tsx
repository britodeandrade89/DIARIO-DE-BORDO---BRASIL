import React from 'react';
import type { Destination, Itinerary } from '../types';
import { MapPinIcon } from './icons';
import { TripOption } from './Destinations';

interface DestinationCardProps {
  destination: Destination;
  tripOptions: TripOption[];
  onClick: () => void;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination, tripOptions, onClick }) => {
  const { themeColor, icon } = destination;
  const departureFlight = tripOptions[0]?.departureFlight;

  return (
    <div 
      onClick={onClick}
      className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg border border-white/30 flex flex-col h-full overflow-hidden transition-all duration-300 cursor-pointer group hover:shadow-cyan-500/20 hover:shadow-2xl hover:-translate-y-2"
      style={{ '--theme-color': themeColor } as React.CSSProperties}
    >
      {/* Header with theme color and icon */}
      <div 
        className="p-5 relative text-white" 
        style={{ backgroundColor: themeColor }}
      >
        <div className="absolute top-2 right-2 text-white/20 transform-gpu group-hover:scale-110 transition-transform duration-300">
          {React.cloneElement(icon, { className: 'h-24 w-24' })}
        </div>
        <h3 className="text-xl font-bold relative z-10 drop-shadow-sm flex items-baseline">
          <span>{destination.title}</span>
        </h3>
        <p className="text-sm text-white/90 relative z-10 mt-1 h-10 drop-shadow-sm">{destination.description}</p>
      </div>

      {/* Body with trip options */}
      <div className="p-5 flex-grow flex flex-col">
        {departureFlight && (
            <div className="mb-4 text-sm">
                <div className="flex justify-between items-center text-slate-700">
                    <div className="flex items-center truncate pr-2">
                        <MapPinIcon className="h-4 w-4 mr-2 flex-shrink-0 text-[var(--theme-color)]" />
                        <span className="font-semibold">Voo de Ida</span>
                    </div>
                    <span 
                        className="font-semibold text-slate-800 px-2 py-0.5 rounded"
                        style={{ backgroundColor: `${themeColor}20`}}
                    >
                        R$ {departureFlight.totalPrice.toLocaleString('pt-BR')}
                    </span>
                </div>
            </div>
        )}
        
        <div className="space-y-4 flex-grow">
          {tripOptions.length > 0 ? (
            tripOptions.map((option, index) => (
              <div key={index}>
                <div className="flex justify-between items-center text-sm font-semibold text-slate-800">
                  <span>Volta em {option.returnDate} ({option.duration})</span>
                  <span className="text-lg font-bold" style={{color: themeColor}}>
                     R$ {option.totalCost.toLocaleString('pt-BR')}
                  </span>
                </div>
                <div className="text-xs text-slate-500 text-right">
                  (volta por R$ {option.returnFlight.totalPrice.toLocaleString('pt-BR')})
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-sm text-slate-500 pt-4">
              <p>Nenhuma combinação de ida e volta encontrada com os voos salvos.</p>
            </div>
          )}
        </div>

        {tripOptions.length > 0 && <div className="mt-auto pt-4 text-xs text-center text-slate-500">
            Custo total estimado (ida + volta).
        </div>}
      </div>
    </div>
  );
};

export default DestinationCard;