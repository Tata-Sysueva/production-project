import { useState } from 'react';
import styles from './Sidebar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import classNames from 'classnames';

export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const handleToggle = () => {
        setCollapsed((prev) => !prev);
    }
    return (
        <div className={classNames(styles.sidebarWrapper, { [styles.collapsed]: collapsed })}>
            <button onClick={handleToggle}>Toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    )
}
