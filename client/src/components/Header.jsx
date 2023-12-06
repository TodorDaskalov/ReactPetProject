import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import Path from '../appPaths';

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
                    <Link to={Path.Home} className={styles.liElement}>Home page</Link>
                    <Link to={Path.PetsList} className={styles.liElement}>Pet's for adoption</Link>
                    {isAuthenticated && ( 
                        <>
                            <Link to={Path.AddPet} className={styles.liElement}>Add pet</Link>
                            <Link to={Path.Logout} className={styles.liElement}>Logout</Link>
                            <Link to={Path.MyPets} className={styles.liElement}>My Pets</Link>
                        </>
                    )}
                    {!isAuthenticated && (
                        <>
                            <Link to={Path.Register} className={styles.liElement}>Register</Link>
                            <Link to={Path.Login} className={styles.liElement}>Login</Link>
                        </>
                    )}
                    <Link to={Path.Tips} className={styles.liElement}>Contacts</Link>
                </ul>
            </nav>
        </div>
    )
}