import { routerConfig } from 'app/configs/router/routerConfig';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'shared/providers';
import { ErrorBoundary } from 'shared/providers/ErrorBoundary';

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <ErrorBoundary>
            <ThemeProvider>
                <RouterProvider router={routerConfig} />
            </ThemeProvider>
        </ErrorBoundary>
    </StrictMode>
);