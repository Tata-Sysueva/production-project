import { Link, Outlet } from 'react-router-dom';

import './styles/index.scss';
import { useTheme } from './theme/useTheme';
import ThemeProvider from './theme/ThemeProvider';

export const App = () => {
    const {theme, toggleTheme} = useTheme();
console.log('theme', theme)
    return (

            <div className={`app ${theme}`}>
                <button onClick={toggleTheme}>TOGGLE</button>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/home">About</Link>
                        </li>
                    </ul>
                </nav>
                <main>
                    <Outlet /> {/* Здесь будут рендериться дочерние маршруты */}
                </main>
            </div>
    )
}