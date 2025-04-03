import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './styles/index.scss';
import { useTheme } from 'shared/providers/ThemeProvider';
import { Header, Sidebar } from 'widgets';

import 'shared/configs/i18n/i18n';

export const App = () => {
    const { theme } = useTheme();

    return (
        <Suspense fallback="">
            <div className={`app ${theme}`}>
                <Header />
                <main className="contentPage">
                    <Sidebar />
                    <div className="pageWrapper">
                        <Outlet /> {/* Здесь будут рендериться дочерние маршруты */}
                    </div>
                </main>
            </div>
        </Suspense>
    )
}