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
import Logout from "./components/Logout";

function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken');

        return {};
    });

    const loginSubmitHandler = async (email, password) => {
        const result = await authService.login(email, password);

        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);
        navigate(Path.Home);
    };

    const registerSubmitHandler = async (email, password, confirmPassword) => {
        const result = await authService.register(email, password)

        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);
        navigate(Path.Home);
    }

    const logoutHandler =  () => {
        setAuth({});
        localStorage.removeItem('accessToken');
    }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
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
                    <Route path={Path.AddPet} element={<CreatePet />} />
                    <Route path={Path.PetsList} element={<PetsList />} />
                    <Route path={Path.PetDetails} element={<PetDetails />} />
                    <Route path={Path.Tips} element={<TipsAndQuestions />} />
                    <Route path={Path.Login} element={<LoginPage />} />
                    <Route path={Path.Logout} element={<Logout />} />
                    <Route path={Path.Register} element={<RegisterPage />} />

                </Routes>

                <Footer />
            </>
        </AuthContext.Provider>
    );
}

export default App;
