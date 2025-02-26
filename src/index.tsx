import { routerConfig } from 'app/configs/router/routerConfig';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'shared/providers';

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <ThemeProvider>
            <RouterProvider router={routerConfig} />
        </ThemeProvider>
    </StrictMode>
);