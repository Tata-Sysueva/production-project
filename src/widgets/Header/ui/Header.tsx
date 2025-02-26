import { FC } from "react"
import { Navbar } from "widgets/Navbar";

import styles from './Header.module.scss';

export const Header:FC = () => {
    return (
        <header className={styles.header}>
            <Navbar />
        </header>
    )
}
