import { useContext, useState } from "react";
import styles from "./RegisterPage.module.css";
import AuthContext from "../contexts/AuthContext";

const RegisterPage = () => {
    const { registerSubmitHandler } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();

        if (!email || !isValidEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (!password || password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setError("");

        registerSubmitHandler(email, password);
    };

    const isValidEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    };

    return (
        <div className={styles.registerContainer}>
            <h2 className={styles.registerTitle}>Register</h2>
            {error && <p className={styles.error}>{error}</p>}
            <form className={styles.registerForm} onSubmit={handleRegister}>
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
                        autoComplete="new-password"
                    />
                </label>
                <label className={styles.label}>
                    Confirm Password:
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={styles.input}
                        autoComplete="new-password"
                    />
                </label>
                <button type="submit" className={styles.registerButton}>
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegisterPage;
