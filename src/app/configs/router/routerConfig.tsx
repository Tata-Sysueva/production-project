import { Counter, Home, NotFound } from '@pages';
import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RoutePath } from 'shared/helpers/interfaces/routers.interfaces';

import { App } from '../../App';

export const routerConfig = createBrowserRouter([
    {
        path: RoutePath.main,
        element: (
                    <App />
            ),
        children: [
            {
                index: true,
                element: <Counter />,
            },
            {
                path: RoutePath.home,
                element: (
                    <Suspense fallback="Loading home.." >
                        <Home />
                    </Suspense>
                ),
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);