import Footer from "./components/Footer";
import Header from "./components/Header";
import PetDetails from "./components/PetDetails";
import CreatePet from "./components/CreatePet";
import PetsList from "./components/PetsList";
import HeroPage from "./components/HeroPage";
import TipsAndQuestions from "./components/TipsAndQuestions";
import LoginPage from "./components/LoginPage";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<HeroPage />} />
                <Route path="add-pet" element={<CreatePet />} />
                <Route path="/pets" element={<PetsList />} />
                <Route path="/pets/:petId" element={<PetDetails/>} />
                <Route path="/details" element={<PetDetails />} />
                <Route path="/tips" element={<TipsAndQuestions />} />
                <Route path="/login" element={<LoginPage/>} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
