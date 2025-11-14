import React, { useState } from 'react';
import type { Itinerary } from '../types';
import Destinations from './Destinations';
import ItineraryDetailsModal from './ItineraryDetailsModal';
import AiAssistant from './AiAssistant';
import MyTrips from './MyTrips';
import { CompassIcon, BookOpenIcon, SparklesIcon, DownloadIcon, LogoIcon } from './icons';

interface DashboardProps {
  installPromptEvent: BeforeInstallPromptEvent | null;
  onInstallSuccess: () => void;
}

const pageTitles = {
    destinations: {
        icon: <LogoIcon className="h-12 w-12 mx-auto" />,
        title: "Explorar Roteiros",
        subtitle: "Inspire-se com nossos roteiros e veja uma estimativa de custos com base nas suas passagens salvas."
    },
    itineraries: {
        icon: <LogoIcon className="h-12 w-12 mx-auto" />,
        title: "Minhas Viagens",
        subtitle: "Aqui estão todas as suas viagens, agrupadas por destino para facilitar o planejamento."
    },
    'ai-assistant': {
        icon: <LogoIcon className="h-12 w-12 mx-auto" />,
        title: "Assistente de Viagem IA",
        subtitle: "Peça roteiros, dicas de preços, hotéis, distâncias e o que mais sua imaginação permitir."
    }
};

const Dashboard: React.FC<DashboardProps> = ({ installPromptEvent, onInstallSuccess }) => {
    const [activeTab, setActiveTab] = useState<'itineraries' | 'destinations' | 'ai-assistant'>('destinations');
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
                return <MyTrips onSelectItinerary={setSelectedItinerary} />;
        }
    };

    const TabButton: React.FC<{ tabName: 'itineraries' | 'destinations' | 'ai-assistant'; label: string; icon: React.ReactNode }> = ({ tabName, label, icon }) => (
        <button
            onClick={() => setActiveTab(tabName)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm ${
                activeTab === tabName
                    ? 'bg-white text-blue-800 shadow-lg'
                    : 'text-white hover:bg-white/30'
            }`}
        >
            {icon}
            <span>{label}</span>
        </button>
    );

    return (
        <div className="bg-slate-50 min-h-screen flex flex-col">
            <div className="flex-grow">
                <div className="bg-gradient-to-b from-blue-700 to-slate-50 pb-20">
                    <header className="bg-transparent sticky top-0 z-20">
                        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
                            <div className="flex items-center space-x-3">
                                <LogoIcon className="h-12 w-auto" />
                                <div>
                                    <h1 className="text-3xl font-bold text-white">
                                        Check-in,<span className="text-lime-400">GO!</span>
                                    </h1>
                                    <p className="text-sm text-white/80 mt-1">Eu planejo, você clica, finaliza e viaja!</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-1 bg-black/10 p-1 rounded-xl shadow-inner backdrop-blur-sm">
                                    <TabButton tabName="destinations" label="Explorar Roteiros" icon={<CompassIcon className="h-5 w-5" />} />
                                    <TabButton tabName="itineraries" label="Minhas Viagens" icon={<BookOpenIcon className="h-5 w-5" />} />
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
                        <p 
                            className="max-w-2xl mx-auto mt-2 text-lg font-medium" 
                            style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}
                        >
                            {currentTitle.subtitle}
                        </p>
                    </div>
                </div>
                
                <main className="container mx-auto p-4 sm:p-6 lg:p-8 -mt-16">
                   {renderContent()}
                </main>
            </div>
            
            <footer className="w-full text-center p-4 bg-slate-100 border-t border-slate-200 text-xs text-slate-500 space-y-1 flex-shrink-0">
                <p>Todos os direitos reservados a André Brito &reg;</p>
                <p>Desenvolvido por: André Brito</p>
                <p>Versão 1.0</p>
            </footer>

            <ItineraryDetailsModal itinerary={selectedItinerary} onClose={() => setSelectedItinerary(null)} />
        </div>
    );
};

export default Dashboard;