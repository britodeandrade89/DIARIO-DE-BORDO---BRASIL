
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
        // FIX: Reverted the service worker registration to use a standard relative path ('./sw.js').
        // This is the most robust and standard method, relying on the browser's default behavior
        // to resolve the path against the correct application origin. Previous attempts to construct
        // an absolute URL failed due to the sandboxed environment providing an incorrect base URL ('https://ai.studio').
        // This change corrects the origin mismatch error for good.
        navigator.serviceWorker.register('./sw.js')
          .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
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
