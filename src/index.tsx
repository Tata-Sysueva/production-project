import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { routers } from './routers';
import ThemeProvider from './theme/ThemeProvider';

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <ThemeProvider>
            <RouterProvider router={routers} />
        </ThemeProvider>
    </StrictMode>
);