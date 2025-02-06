import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { Counter, Home, NotFound } from '@pages';
import { App } from '../App';
import { RoutePath } from 'shared/helpers/routers.interfaces';

export const routerConfig = createBrowserRouter([
    {
        path: RoutePath.main,
        element: <App />, // Используем App как обертку
        errorElement: <NotFound />, // Обработка ошибок
        children: [
            {
                index: true, // Это будет путь по умолчанию для "/"
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
        ],
    },
]);