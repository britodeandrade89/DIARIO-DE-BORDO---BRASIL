import React, { useState } from 'react';
import type { Itinerary } from '../types';
import Destinations from './Destinations';
import ItineraryCard from './ItineraryCard';
import ItineraryDetailsModal from './ItineraryDetailsModal';
import AiAssistant from './AiAssistant';
import { CompassIcon, BookOpenIcon, SparklesIcon, DownloadIcon } from './icons';
import { initialItineraries } from '../itineraries';

interface DashboardProps {
  installPromptEvent: BeforeInstallPromptEvent | null;
  onInstallSuccess: () => void;
}

const pageTitles = {
    destinations: {
        icon: <CompassIcon className="h-12 w-12 mx-auto text-white/80" />,
        title: "Explorar Roteiros",
        subtitle: "Inspire-se com nossos roteiros e veja uma estimativa de custos com base nas suas passagens salvas."
    },
    itineraries: {
        icon: <BookOpenIcon className="h-12 w-12 mx-auto text-white/80" />,
        title: "Meus Itinerários",
        subtitle: "Aqui estão todas as suas passagens e planos de viagem salvos."
    },
    'ai-assistant': {
        icon: <SparklesIcon className="h-12 w-12 mx-auto text-white/80" />,
        title: "Assistente de Viagem IA",
        subtitle: "Peça roteiros, dicas de preços, hotéis, distâncias e o que mais sua imaginação permitir."
    }
};

const Dashboard: React.FC<DashboardProps> = ({ installPromptEvent, onInstallSuccess }) => {
    const [activeTab, setActiveTab] = useState<'itineraries' | 'destinations' | 'ai-assistant'>('destinations');
    const [itineraries, setItineraries] = useState<Itinerary[]>(initialItineraries);
    const [selectedItinerary, setSelectedItinerary] = useState<Itinerary | null>(null);

    const currentTitle = pageTitles[activeTab];

    const handleInstallClick = () => {
        if (!installPromptEvent) {
            return;
        }
        installPromptEvent.prompt();
        installPromptEvent.userChoice.then(choiceResult => {
            if (choiceResult.outcome === 'accepted') {
                console.log('Usuário aceitou a instalação');
                onInstallSuccess();
            } else {
                console.log('Usuário recusou a instalação');
            }
        });
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'destinations':
                return <Destinations />;
            case 'ai-assistant':
                return <AiAssistant />;
            case 'itineraries':
            default:
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {itineraries.map(itinerary => (
                        <ItineraryCard key={itinerary.id} itinerary={itinerary} onSelect={setSelectedItinerary} />
                    ))}
                    </div>
                );
        }
    };

    const TabButton: React.FC<{ tabName: 'itineraries' | 'destinations' | 'ai-assistant'; label: string; icon: React.ReactNode }> = ({ tabName, label, icon }) => (
        <button
            onClick={() => setActiveTab(tabName)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm ${
                activeTab === tabName
                    ? 'bg-white text-blue-700 shadow-lg'
                    : 'text-white hover:bg-white/30'
            }`}
        >
            {icon}
            <span>{label}</span>
        </button>
    );

    return (
        <div className="bg-slate-50 min-h-screen">
             <div className="bg-gradient-to-r from-red-600 to-blue-700 pb-20">
                <header className="bg-transparent sticky top-0 z-20">
                    <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
                        <h1 className="text-3xl font-bold text-white">
                            Diário de Bordo
                        </h1>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1 bg-black/10 p-1 rounded-xl shadow-inner backdrop-blur-sm">
                                <TabButton tabName="destinations" label="Explorar Roteiros" icon={<CompassIcon className="h-5 w-5" />} />
                                <TabButton tabName="itineraries" label="Meus Itinerários" icon={<BookOpenIcon className="h-5 w-5" />} />
                                <TabButton tabName="ai-assistant" label="Assistente IA" icon={<SparklesIcon className="h-5 w-5" />} />
                            </div>
                            {installPromptEvent && (
                                <button
                                    onClick={handleInstallClick}
                                    className="flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold transition-all text-sm bg-white/90 text-slate-800 hover:bg-white hover:shadow-lg hover:scale-105"
                                >
                                    <DownloadIcon className="h-5 w-5" />
                                    <span>Instalar App</span>
                                </button>
                            )}
                        </div>
                    </nav>
                </header>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center text-white">
                    {currentTitle.icon}
                    <h2 className="text-4xl font-extrabold mt-4">{currentTitle.title}</h2>
                    <p className="max-w-2xl mx-auto mt-2 text-lg opacity-90">{currentTitle.subtitle}</p>
                </div>
             </div>
            
            <main className="container mx-auto p-4 sm:p-6 lg:p-8 -mt-16">
               {renderContent()}
            </main>
            <ItineraryDetailsModal itinerary={selectedItinerary} onClose={() => setSelectedItinerary(null)} />
        </div>
    );
};

export default Dashboard;