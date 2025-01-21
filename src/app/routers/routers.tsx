import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { App } from '../App';
import { Counter, HomeAsync, NotFound } from '@pages';
// import { Counter, HomeAsync, NotFound } from '@page';

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <App />, // Используем App как обертку
        errorElement: <NotFound />, // Обработка ошибок
        children: [
            {
                index: true, // Это будет путь по умолчанию для "/"
                element: <Counter />,
            },
            {
                path: '/home',
                element: (
                    <Suspense fallback="Loading home.." >
                        <HomeAsync />
                    </Suspense>
                ),
            },
        ],
    },
]);