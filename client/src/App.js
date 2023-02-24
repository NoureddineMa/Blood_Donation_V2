import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import LayoutAuth from "./pages/LayoutAuth";
import LandingPage from "./pages/LandingPage";
import VerifyAccount from "./pages/VerifyAccount";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { UserProvider } from "./Context/UserContext";

function App() {
  return (
    <Router>
      <UserProvider>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route element={<LayoutAuth />}  >
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="/register/verify/:token" element={<VerifyAccount />} />
        </Route>
      </Routes>
      </UserProvider>
    </Router> 
  );
}
export default App;
