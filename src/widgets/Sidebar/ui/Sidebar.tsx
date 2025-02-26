import classNames from 'classnames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from 'shared/constants/i18n.constants';
import { Button } from 'shared/ui';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import styles from './Sidebar.module.scss';

export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { t, i18n } = useTranslation();
    const { language, changeLanguage } = i18n;

    const handleToggle = () => {
        setCollapsed((prev) => !prev);
    }

    const toggleLanguage = () => {
        changeLanguage(language === LANGUAGES.RU ? LANGUAGES.EN : LANGUAGES.RU);
    }

    return (
        <div className={classNames(styles.sidebarWrapper, { [styles.collapsed]: collapsed })}>
            <button onClick={handleToggle}>Toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <Button onClick={toggleLanguage}>{t('common:change_language')}</Button>
            </div>
        </div>
    )
}
