import { Routes, Route, useNavigate } from "react-router-dom";

import { useState } from "react";

import * as authService from "../services/authService";
import AuthContext from "./contexts/AuthContext";

import Footer from "./components/Footer";
import Header from "./components/Header";
import PetDetails from "./components/PetDetails";
import CreatePet from "./components/CreatePet";
import PetsList from "./components/PetsList";
import HeroPage from "./components/HeroPage";
import TipsAndQuestions from "./components/TipsAndQuestions";
import LoginPage from "./components/LoginPage";

function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});

    const loginSubmitHandler = async (email, password) => {
        const result = await authService.login(email, password);

        setAuth(result);

        navigate('/')
    };

    return (
        <AuthContext.Provider value={{ loginSubmitHandler }}>
            <>
                <Header />

                <Routes>
                    <Route path="/" element={<HeroPage />} />
                    <Route path="add-pet" element={<CreatePet />} />
                    <Route path="/pets" element={<PetsList />} />
                    <Route path="/pets/:petId" element={<PetDetails />} />
                    <Route path="/details" element={<PetDetails />} />
                    <Route path="/tips" element={<TipsAndQuestions />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>

                <Footer />
            </>
        </AuthContext.Provider>
    );
}

export default App;
