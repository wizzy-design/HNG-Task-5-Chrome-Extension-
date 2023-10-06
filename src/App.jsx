import LandingPage from "./pages/LandingPage"; // Landing Page Component
import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login.jsx";
import GetStarted from "./components/GetStarted";
import Dashboard from "./pages/Dasboard";

function App() {
  return (
    <>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
