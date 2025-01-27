import { useState } from 'react';
import { register } from '../../services/AuthService';
import RegisterData from "../../types/RegisterData";
import styles from './RegisterForm.module.scss';
import { useNavigate } from 'react-router-dom';

const RegisterForm: React.FC = () => {
    const [formData, setFormData] = useState<RegisterData>({
        email: '',
        username: '',
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
            await register(formData);
            navigate('/login');
        } catch (err) {
            setError('Registration failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className={styles['register-form']} onSubmit={handleSubmit}> 
            <h2>Create account</h2>
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
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
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
                {loading ? 'Registering...' : 'Register'}
            </button>
        </form>
    );
};

export default RegisterForm;
