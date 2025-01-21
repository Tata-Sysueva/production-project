import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { routers } from './app/routers/routers';
import { ThemeProvider } from './app/providers/ThemeProvider';

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <ThemeProvider>
            <RouterProvider router={routers} />
        </ThemeProvider>
    </StrictMode>
);