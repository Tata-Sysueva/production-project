import cx from 'classnames';
import { FC } from "react";
import { Link as LinkRouter, LinkProps } from "react-router-dom";

import styles from './Link.module.scss';

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
            className={cx(styles.link, className, {
                [styles[theme]]: true,
            })}
            {...otherProps}
        >
            {children}
        </LinkRouter>
    );
};

