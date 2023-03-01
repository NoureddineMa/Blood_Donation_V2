import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import LayoutAuth from "./pages/LayoutAuth";
import LandingPage from "./pages/LandingPage";
import VerifyAccount from "./pages/VerifyAccount";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { UserProvider } from "./Context/UserContext";
import ViewPatient from "./pages/Donnateur/ViewPatient";
import PostBloodDonation from "./pages/Donnateur/PostBloodDonation";
import HomePage from "./pages/Donnateur/HomePage";
import ChangePassword from "./pages/Donnateur/ChangePassword";
import IsLoggedin from "./Utils/IsLoggedin";
import LayoutUsers from "./pages/LayoutUsers"

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

        <Route element={<IsLoggedin />} >
        <Route  element={<LayoutUsers />} >
            <Route path="/HomePage" element={<HomePage />}   />
            <Route path="/PostBlood" element={<PostBloodDonation />} />
            <Route path="/ViewPatient" element={<ViewPatient />}   />
            <Route path="/changePassword" element={<ChangePassword />}/>
        </Route>
        </Route>
      </Routes>

      </UserProvider>
    </Router> 
  );
}
export default App;
