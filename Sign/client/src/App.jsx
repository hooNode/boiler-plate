import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../src/layout/Navbar/Nabar.Container";
import Footer from "../src/layout/Footer/Footer.Container";
import { Landing, Login, Register } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
