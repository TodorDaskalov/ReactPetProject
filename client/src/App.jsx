import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";

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
import EditPet from "./components/EditPet";

function App() {
    
    return (
        <AuthProvider>
            <>
                <Header />
                <Routes>
                    <Route path={Path.Home} element={<HeroPage />} />
                    <Route path={Path.AddPet} element={<CreatePet />} />
                    <Route path={Path.EditPet} element={<EditPet />} />
                    <Route path={Path.PetsList} element={<PetsList />} />
                    <Route path={Path.PetDetails} element={<PetDetails />} />
                    <Route path={Path.Tips} element={<TipsAndQuestions />} />
                    <Route path={Path.Login} element={<LoginPage />} />
                    <Route path={Path.Logout} element={<Logout />} />
                    <Route path={Path.Register} element={<RegisterPage />} />
                </Routes>
                <Footer />
            </>
        </AuthProvider>
    );
}

export default App;
