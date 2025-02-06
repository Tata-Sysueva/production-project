import { Outlet } from 'react-router-dom';

import './styles/index.scss';
import { useTheme } from '../shared/providers/ThemeProvider';
import { Header, Sidebar } from '@widgets';

export const App = () => {
    const { theme } = useTheme();

    return (

            <div className={`app ${theme}`}>
                <Header />
                <main className="contentPage">
                    <Sidebar />
                    <div className="pageWrapper">
                        <Outlet /> {/* Здесь будут рендериться дочерние маршруты */}
                    </div>
                </main>
            </div>
    )
}