import { useContext, useState } from "react";
import styles from "./LoginPage.module.css";
import AuthContext from "../contexts/AuthContext";

const LoginPage = () => {
    const { loginSubmitHandler } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !isValidEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (!password || password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        try {
            setError("");

            await loginSubmitHandler(email, password);
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data.message);
            } else {
                setError("Incorrect email or password. Please try again.");
            }
        }
    };

    const isValidEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    };

    return (
        <div className={styles.loginContainer}>
            <h2 className={styles.loginTitle}>Login</h2>
            {error && <p className={styles.error}>{error}</p>}
            <form className={styles.loginForm} onSubmit={handleLogin}>
                <label className={styles.label}>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input}
                        autoComplete="email"
                    />
                </label>
                <label className={styles.label}>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.input}
                        autoComplete="current-password"
                    />
                </label>
                <button type="submit" className={styles.loginButton}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
