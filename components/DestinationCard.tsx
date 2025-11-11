import React from 'react';
import type { Destination } from '../types';
import { MapPinIcon } from './icons';

interface DestinationCardProps {
  destination: Destination;
  totalCost: number;
  costBreakdown: { leg: string; price: number | null; note?: string }[];
  duration: string;
  onClick: () => void;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination, totalCost, costBreakdown, duration, onClick }) => {
  const { themeColor, icon } = destination;

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-lg border border-slate-200 flex flex-col h-full overflow-hidden transition-all duration-300 cursor-pointer group hover:shadow-2xl hover:-translate-y-1"
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
        <h3 className="text-xl font-bold relative z-10 flex items-baseline">
          <span>{destination.title}</span>
          {duration && <span className="text-base font-normal text-white/80 ml-2 whitespace-nowrap">{duration}</span>}
        </h3>
        <p className="text-sm text-white/90 relative z-10 mt-1 h-10">{destination.description}</p>
      </div>

      {/* Body with cost breakdown */}
      <div className="p-5 flex-grow">
        <div className="space-y-2.5">
          {costBreakdown.map((item, index) => (
            <div key={index} className="flex justify-between items-center text-sm text-slate-600">
              <div className="flex items-center truncate pr-2">
                <MapPinIcon 
                    className={`h-4 w-4 mr-2 flex-shrink-0 ${item.price !== null ? 'text-[var(--theme-color)]' : 'text-slate-300'}`} 
                />
                <span className="truncate">{item.leg}</span>
              </div>
              {item.note ? (
                 <span className="font-semibold text-xs text-green-800 bg-green-100 px-2 py-0.5 rounded-full">
                  {item.note}
                </span>
              ) : item.price !== null ? (
                <span 
                  className="font-semibold text-slate-800 px-2 py-0.5 rounded"
                  style={{ backgroundColor: `${themeColor}20`}}
                >
                  R$ {item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              ) : (
                <span className="text-xs text-slate-400 font-medium">A buscar</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer with total cost */}
      <div 
        className="bg-slate-50 p-4 mt-auto border-t-4"
        style={{ borderColor: themeColor }}
      >
         <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-slate-600">Custo Estimado (Trechos)</span>
            <span 
              className="text-xl font-bold"
              style={{ color: themeColor }}
            >
              R$ {totalCost.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </span>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;