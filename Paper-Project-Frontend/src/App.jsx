import MainLayout from "./components/MainLayout"
import Letter from "./components/Letter"
import Home from "./components/Home";
import LetterManagement from "./components/LetterManagement";
import { Routes, Route } from "react-router-dom";


function App() {
    return (
        <MainLayout>
            <Route path="/" element={<Home />} />
            <Route path="/letter" element={<Letter />} />
            <Route path="/upload" element={<LetterManagement />} />
            <Route path="/documents" element={<div>Documents page</div>} /> {/* Still in development */}



        </MainLayout>);


}

export default App;
