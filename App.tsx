
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
        // FIX: Replaced `window.location.href` with `document.baseURI`.
        // In sandboxed environments, `location.href` can be 'about:blank',
        // which is not a valid base for the URL constructor, causing a TypeError.
        // `document.baseURI` provides a reliable base URL to construct the absolute path to the service worker.
        const swUrl = new URL('sw.js', document.baseURI);
        navigator.serviceWorker.register(swUrl, { scope: './' })
          .then(registration => {
            console.log('Service Worker registered with base URI:', registration.scope);
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
