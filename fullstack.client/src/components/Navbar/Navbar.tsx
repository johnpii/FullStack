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
                <Link to="/regist" className={styles['navbar-item']}>Регистрация</Link>
                <Link to="/logout" className={styles['navbar-item']}>Выход</Link>
            </div>
        </nav>
    );
};

export default Navbar;
