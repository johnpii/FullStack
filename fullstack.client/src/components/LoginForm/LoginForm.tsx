import { useState } from 'react';
import { login } from '../../services/AuthService';
import LoginData from "../../types/LoginData";
import styles from './LoginForm.module.scss';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
    const [formData, setFormData] = useState<LoginData>({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await login(formData);
            navigate('/');
        } catch (err) {
            setError('Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className={styles['login-form']} onSubmit={handleSubmit}> 
            <h2>Login</h2>
            {error && <p className={styles.error}>{error}</p>}
            <div className={styles['input-field']}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className={styles['input-field']}>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <button className={styles.button} type="submit" disabled={loading}>
                {loading ? 'Logining...' : 'Login'}
            </button>
        </form>
    );
};

export default LoginForm;
