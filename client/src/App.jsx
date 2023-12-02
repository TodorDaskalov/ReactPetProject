import { Routes, Route, useNavigate } from "react-router-dom";

import { useState } from "react";

import * as authService from "../services/authService";
import AuthContext from "./contexts/AuthContext";
import Path from "./appPaths"

import Footer from "./components/Footer";
import Header from "./components/Header";
import PetDetails from "./components/PetDetails";
import CreatePet from "./components/CreatePet";
import PetsList from "./components/PetsList";
import HeroPage from "./components/HeroPage";
import TipsAndQuestions from "./components/TipsAndQuestions";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});

    const loginSubmitHandler = async (email, password) => {
        const result = await authService.login(email, password);

        setAuth(result);

        navigate(Path.Home);
    };

    const registerSubmitHandler = async (email, password, confirmPassword) => {
        const result = await authService.register(email, password)

        setAuth(result);

        navigate(Path.Home);
    }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        username: auth.username,
        email: auth.email,
        isAuthenticated: !!auth.email,
    }

    return (
        <AuthContext.Provider value={values}>
            <>
                <Header />

                <Routes>
                    <Route path={Path.Home} element={<HeroPage />} />
                    <Route path={Path.CreatePet} element={<CreatePet />} />
                    <Route path={Path.PetsList} element={<PetsList />} />
                    <Route path={Path.PetDetails} element={<PetDetails />} />
                    <Route path={Path.Tips} element={<TipsAndQuestions />} />
                    <Route path={Path.Login} element={<LoginPage />} />
                    <Route path={Path.Logout} element={<LoginPage />} />
                    <Route path={Path.Register} element={<RegisterPage />} />

                </Routes>

                <Footer />
            </>
        </AuthContext.Provider>
    );
}

export default App;
