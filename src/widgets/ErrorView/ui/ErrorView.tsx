import { ErrorInfo, FC } from 'react';

import styles from './ErrorView.module.scss';

type Props = {
    error: Error;
    errorInfo: ErrorInfo;
};

export const ErrorView: FC<Props> = ({ error, errorInfo }) => {
    return (
        <div className={styles.errorWrapper}>
            <h1>Что-то пошло не так.</h1>
            {error && String(error)}
            <details className={styles.errorDetails}>
                <summary>Подробнее</summary>
                {errorInfo && errorInfo?.componentStack}
            </details>
        </div>
    );
};