import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles['navbar-left']}>
                <Link to="/" className={styles['navbar-item']}>Главная</Link>
            </div>
            <div className={`${styles['navbar-right']} ${isMenuOpen ? styles.open : ''}`}>
                <Link to="/login" className={styles['navbar-item']}>Вход</Link>
                <Link to="/regist" className={styles['navbar-item']}>Регистрация</Link>
                <Link to="/logout" className={styles['navbar-item']}>Выход</Link>
            </div>
            <button className={styles['burger-icon']} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    );
};

export default Navbar;
