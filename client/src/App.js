import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import LayoutAuth from "./pages/LayoutAuth";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route element={<LayoutAuth />}  >
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/ResetPassword/:token" element={<ResetPassword />} />
        </Route>
      </Routes>
    </Router> 
  );
}
export default App;
