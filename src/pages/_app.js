import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '../QueryClient';
import { CssBaseline } from '@mui/material';  // Import pentru stiluri de bază (optional, dacă folosești Material-UI)

function MyApp({ Component, pageProps }) {
    return (
        <QueryClientProvider client={queryClient}>
            <CssBaseline /> {/* Aplica stiluri globale de la Material-UI (dacă folosești Material-UI) */}
            <Component {...pageProps} />
        </QueryClientProvider>
    );
}

export default MyApp;
