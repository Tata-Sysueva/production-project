import { Link } from 'shared/ui';
import styles from './Sidebar.module.scss';
import { AppLinkTheme } from 'shared/ui/Link';
import { RoutePath } from 'shared/helpers/routers.interfaces';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

export const Sidebar = () => {
    return (
        <div className={styles.sidebarWrapper}>
            <ThemeSwitcher />
            <nav className={styles.links}>
                <Link to={RoutePath.main} theme={AppLinkTheme.PRIMARY}>Start</Link>
                <Link to={RoutePath.home} theme={AppLinkTheme.RED}>Home</Link>
            </nav>
        </div>
    )
}
