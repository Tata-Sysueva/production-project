import classNames from 'classnames';
import styles from './ThemeSwitcher.module.scss';
import { useTheme } from 'shared/providers/ThemeProvider';
import { Button, ThemeButton } from 'shared/ui';
import { ReactComponent as ThemeIcon} from 'shared/assets/icons/theme.svg'


interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();


    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(styles.themeSwitcher, className)}
            onClick={toggleTheme}
        >
            <ThemeIcon className={styles.icon} />
        </Button>
    );
};

