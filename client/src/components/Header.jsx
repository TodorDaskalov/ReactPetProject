import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

export default function Header() {

    const {
        isAuthenticated,
        email,
        username
    } = useContext(AuthContext);

    return (
        <div className={styles.headerContainer}>
            <h1 className={styles.header}>Viki's Pet Nursery</h1>
            <nav className={styles.navElement}>
                <ul className={styles.ulElement}>
                    <Link to={'/'} className={styles.liElement}>Home page</Link>
                    <Link to={'/pets'} className={styles.liElement}>Pet's for adoption</Link>
                    {isAuthenticated && ( 
                        <>
                            <Link to={'/add-pet'} className={styles.liElement}>Add pet</Link>
                            <Link to={'/logout'} className={styles.liElement}>Logout</Link>
                            <span>Hello {username} </span>
                        </>
                    )}
                    {!isAuthenticated && (
                        <Link to={'/login'} className={styles.liElement}>Register / Login</Link>
                    )}
                    <Link to={'/tips'} className={styles.liElement}>Contacts</Link>
                </ul>
            </nav>
        </div>
    )
}