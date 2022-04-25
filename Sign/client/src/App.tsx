import { BrowserRouter, Route, Routes } from "react-router-dom";
import { withAuth } from "./hoc/isAuth";
import { Landing, Login, Register } from "./pages";

function App() {
  const AuthLogin = withAuth(Login, true);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<AuthLogin />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
