import MainLayout from "./components/Layout/MainLayout"
import Letter from "./components/Letter/Letter"
import Home from "./components/Pages/Home";
import LetterManagement from "./components/Letter/LetterManagement";
import { Routes, Route } from "react-router-dom";


function App() {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/letter" element={<Letter />} />
                <Route path="/upload" element={<LetterManagement />} />
                <Route path="/documents" element={<div>Documents page</div>} /> {/* Still in development */}

            </Routes>



        </MainLayout>);


}

export default App;
