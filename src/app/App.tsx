import { Outlet } from 'react-router-dom';

import './styles/index.scss';
import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from '../shared/providers/ThemeProvider';
import { Calculator } from '@features';

export const App = () => {
    const { theme } = useTheme();

    return (

            <div className={`app ${theme}`}>
                <Sidebar />
                <Calculator />
                <main>
                    <Outlet /> {/* Здесь будут рендериться дочерние маршруты */}
                </main>
            </div>
    )
}