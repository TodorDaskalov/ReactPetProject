import Footer from "./components/Footer";
import Header from "./components/Header";
import PetDetails from "./components/PetDetails";
import PetsList from "./components/PetsList";
import HeroPage from "./components/HeroPage";
import TipsAndQuestions from "./components/TipsAndQuestions";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Header />
            {/* <HeroPage /> */}
            <Routes>
                <Route path="/" element={<HeroPage />} />
                <Route path="/pets" element={<PetsList />} />
                <Route path="/details" element={<PetDetails />} />
                <Route path="/tips" element={<TipsAndQuestions />} />
            </Routes>

            {/* <PetsList /> */}
            {/* <PetDetails /> */}
            {/* <TipsAndQuestions /> */}
            <Footer />
        </>
    );
}

export default App;
