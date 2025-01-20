import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles['navbar-left']}>
                <Link to="/" className={styles['navbar-item']}>Главная</Link>
            </div>
            <div className={styles['navbar-right']}>
                <Link to="/login" className={styles['navbar-item']}>Вход</Link>
                <Link to="/register" className={styles['navbar-item']}>Регистрация</Link>
            </div>
        </nav>
    );
};

export default Navbar;
