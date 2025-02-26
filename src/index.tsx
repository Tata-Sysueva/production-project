import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'shared/providers';
import { routerConfig } from 'app/configs/router/routerConfig';

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <ThemeProvider>
            <RouterProvider router={routerConfig} />
        </ThemeProvider>
    </StrictMode>
);