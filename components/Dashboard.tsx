
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
                            <h2 className="text-4xl font-extrabold text-slate-800">Meus Itinerários</h2>
                            <p className="text-slate-500 mt-2 text-lg">Aqui estão todas as suas passagens e planos de viagem salvos.</p>
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
            className={`flex items-center space-x-2 px-4 py-2 rounded-md font-semibold transition-colors text-sm ${
                activeTab === tabName
                    ? 'bg-cyan-600 text-white shadow'
                    : 'text-slate-600 hover:bg-slate-200'
            }`}
        >
            {icon}
            <span>{label}</span>
        </button>
    );

    return (
        <div className="bg-slate-50 min-h-screen">
             <header className="bg-white shadow-sm sticky top-0 z-10">
                <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-slate-800">
                        Diário de Bordo
                    </h1>
                     <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 bg-slate-100 p-1 rounded-lg">
                            <TabButton tabName="destinations" label="Explorar Roteiros" icon={<CompassIcon className="h-5 w-5" />} />
                            <TabButton tabName="itineraries" label="Meus Itinerários" icon={<BookOpenIcon className="h-5 w-5" />} />
                            <TabButton tabName="ai-assistant" label="Assistente IA" icon={<SparklesIcon className="h-5 w-5" />} />
                        </div>
                        {installPromptEvent && (
                            <button
                                onClick={handleInstallClick}
                                className="flex items-center space-x-2 px-3 py-2 rounded-lg font-semibold transition-colors text-sm bg-cyan-50 text-cyan-700 hover:bg-cyan-100 border border-cyan-200"
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
