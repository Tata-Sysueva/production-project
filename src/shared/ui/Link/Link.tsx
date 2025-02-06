import styles from './Link.module.scss';
import {Link as LinkRouter, LinkProps} from "react-router-dom";
import { FC } from "react";
import cx from 'classnames';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

type Props = {
    className?: string;
    theme?: AppLinkTheme;
} & LinkProps;

export const Link: FC<Props> = ({ to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps }) => {
    return (
        <LinkRouter
            to={to}
            className={cx(styles.link, className,  {
                [styles[theme]]: true,
            })}
            {...otherProps}
        >
            {children}
        </LinkRouter>
    );
};

