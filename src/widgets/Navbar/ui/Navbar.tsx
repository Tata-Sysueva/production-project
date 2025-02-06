import React from 'react'
import { RoutePath } from 'shared/helpers/routers.interfaces';
import { Link } from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/Link';
import styles from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <nav className={styles.links}>
        <Link to={RoutePath.main} theme={AppLinkTheme.PRIMARY}>Start</Link>
        <Link to={RoutePath.home} theme={AppLinkTheme.RED}>Home</Link>
    </nav>
  )
}
