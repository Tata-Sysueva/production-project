import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotFound } from './components/NotFound/NotFound';
import { Counter } from './components/Counter';
import { App } from './App';
import { Suspense } from 'react';
import { HomeAsync } from './components/Home/Home.async';

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