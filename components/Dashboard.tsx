
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

const Dashboard: React.FC<DashboardProps> = ({ installPromptEvent, onInstallSuccess }) => {
    const [activeTab, setActiveTab] = useState<'itineraries' | 'destinations' | 'ai-assistant'>('destinations');
    const [itineraries, setItineraries] = useState<Itinerary[]>(initialItineraries);
    const [selectedItinerary, setSelectedItinerary] = useState<Itinerary | null>(null);

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
                    <div>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">Meus Itinerários</h2>
                            <p className="text-slate-600 mt-2 text-lg">Aqui estão todas as suas passagens e planos de viagem salvos.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {itineraries.map(itinerary => (
                            <ItineraryCard key={itinerary.id} itinerary={itinerary} onSelect={setSelectedItinerary} />
                        ))}
                        </div>
                    </div>
                );
        }
    };

    const TabButton: React.FC<{ tabName: 'itineraries' | 'destinations' | 'ai-assistant'; label: string; icon: React.ReactNode }> = ({ tabName, label, icon }) => (
        <button
            onClick={() => setActiveTab(tabName)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm ${
                activeTab === tabName
                    ? 'bg-gradient-to-r from-red-600 to-blue-600 text-white shadow-lg'
                    : 'text-slate-700 hover:bg-white/60'
            }`}
        >
            {icon}
            <span>{label}</span>
        </button>
    );

    return (
        <div className="bg-transparent min-h-screen">
             <header className="bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-20">
                <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
                        Diário de Bordo
                    </h1>
                     <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1 bg-white/50 p-1 rounded-xl shadow-inner">
                            <TabButton tabName="destinations" label="Explorar Roteiros" icon={<CompassIcon className="h-5 w-5" />} />
                            <TabButton tabName="itineraries" label="Meus Itinerários" icon={<BookOpenIcon className="h-5 w-5" />} />
                            <TabButton tabName="ai-assistant" label="Assistente IA" icon={<SparklesIcon className="h-5 w-5" />} />
                        </div>
                        {installPromptEvent && (
                            <button
                                onClick={handleInstallClick}
                                className="flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold transition-all text-sm bg-gradient-to-r from-sky-500 to-cyan-500 text-white hover:shadow-lg hover:scale-105"
                            >
                                <DownloadIcon className="h-5 w-5" />
                                <span>Instalar App</span>
                            </button>
                        )}
                    </div>
                </nav>
            </header>
            <main className="container mx-auto p-4 sm:p-6 lg:p-8">
               {renderContent()}
            </main>
            <ItineraryDetailsModal itinerary={selectedItinerary} onClose={() => setSelectedItinerary(null)} />
        </div>
    );
};

export default Dashboard;