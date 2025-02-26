import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/helpers/interfaces/routers.interfaces';
import { Link } from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/Link';

import styles from './Navbar.module.scss';


export const Navbar = () => {
    const { t } = useTranslation();

    return (
        <nav className={styles.links}>
            <Link to={RoutePath.main} theme={AppLinkTheme.PRIMARY}>{t("common:start")}</Link>
            <Link to={RoutePath.home} theme={AppLinkTheme.RED}>{t("common:home")}</Link>
        </nav>
    )
}
