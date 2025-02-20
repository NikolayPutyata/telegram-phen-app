
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './i18n';
import store from './redux/store.ts';
import { TonConnectUIProvider } from "@tonconnect/ui-react";

const manifestUrl = "https://telegram-phen-app-server-scjhs.ondigitalocean.app/tonconnect-manifest.json"; 

createRoot(document.getElementById('root')!).render(
  
    <TonConnectUIProvider manifestUrl={manifestUrl}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      </BrowserRouter>
      </TonConnectUIProvider>
  
);
