import { useState } from 'react';
import styles from './Sidebar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import classNames from 'classnames';
import { Button } from 'shared/ui';
import { LANGUAGES } from 'shared/constants/i18n.constants';
import { useTranslation } from 'react-i18next';

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
