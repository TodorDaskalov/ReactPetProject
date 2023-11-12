import { Link } from 'react-router-dom';
import styles from './Header.module.css'

export default function Header() {
    return (
        <div className={styles.headerContainer}>
            <h1 className={styles.header}>Viki's Pet Nursery</h1>
            <nav className={styles.navElement}>
                <ul className={styles.ulElement}>
                    <Link to={'/'} className={styles.liElement}>Home page</Link>
                    <Link to={'/pets'} className={styles.liElement}>Pet's for adoption</Link>
                    <Link to={'/details'} className={styles.liElement}>Register / Login</Link>
                    <Link to={'/tips'} className={styles.liElement}>Contacts</Link>
                </ul>
            </nav>
        </div>
    )
}