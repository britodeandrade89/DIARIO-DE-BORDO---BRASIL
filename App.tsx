
import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [installPromptEvent, setInstallPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallPromptEvent(event as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Limpa o evento se o app for instalado
    const handleAppInstalled = () => {
      setInstallPromptEvent(null);
    };

    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        // FIX: Construct an absolute URL for the service worker to match the document's origin.
        // This prevents a cross-origin registration error in certain hosting environments.
        const swUrl = `${window.location.origin}/sw.js`;
        navigator.serviceWorker.register(swUrl, { scope: './' })
          .then(registration => {
            console.log('Service Worker registrado com sucesso:', registration.scope);
          })
          .catch(err => {
            console.error('Falha no registro do Service Worker:', err);
          });
      });
    }
  }, []);

  return (
    <div className="font-sans">
      <Dashboard 
        installPromptEvent={installPromptEvent} 
        onInstallSuccess={() => setInstallPromptEvent(null)}
      />
    </div>
  );
};

export default App;