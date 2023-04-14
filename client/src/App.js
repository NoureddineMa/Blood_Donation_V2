import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import LayoutAuth from "./pages/LayoutAuth";
import LandingPage from "./pages/LandingPage";
import VerifyAccount from "./pages/VerifyAccount";
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import { UserProvider } from "./hooks/UserContext";
import NotFound from "./pages/NotFound";
// admin
import LayoutAdmin from "./components/LayoutAdmin";
import AdminHome from './pages/DashboardAdmin/AdminHome'
import PatientList from "./pages/DashboardAdmin/PatientList";
import DonnateurList from "./pages/DashboardAdmin/DonnateurList";
import BlogPage from "./pages/DashboardAdmin/BlogPage";
import MessagesPage from "./pages/DashboardAdmin/MessagesPage";
// Donnateur 
import PageDonnateur from "./pages/Donnateur/PageDonnateur";
import FormContactus from "./pages/Donnateur/FormContactus";
import FormDonnateur from "./pages/Donnateur/FormDonnateur";
// Patient 
import PagePatient from './pages/Patient/PagePatient'
import FormContactusPatient from './pages/Patient/FormContactusPatient'
import FormPatient from './pages/Patient/FormPatient'
// isLoggedIn
import IsLoggedIn from './Utils/IsLoggedIn'
function App() {

 

  return (
    <Router>
      <UserProvider>
      <Routes>
        <Route element={<LayoutAuth />}  >
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="/register/verify/:token" element={<VerifyAccount />} />
        </Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFound />} />

        <Route element={ <IsLoggedIn />} >
        <Route element={localStorage.getItem('nameRole')=="Admin" ? <LayoutAdmin /> : <LandingPage />} >
            <Route path="/Admin" element={<AdminHome />} />
            <Route path="/Donnateur" element={<DonnateurList />} />
            <Route path="/Patient" element={<PatientList />}/>
            <Route path="/Messages" element={<MessagesPage />} />
            <Route path="/Blog" element={<BlogPage />} />
        </Route>
        {/* Layout Donnateur */}
        <Route>
            <Route path="/donnateurpage" element={localStorage.getItem('nameRole')=="Donnateur" ? <PageDonnateur /> : <LandingPage />} />
            <Route path="/FormDonnateur" element={localStorage.getItem('nameRole')=="Donnateur" ? <FormDonnateur /> : <LandingPage />} />
            <Route path="/ContactDonnateur" element={localStorage.getItem('nameRole')=="Donnateur" ? <FormContactus /> : <LandingPage />} />
        </Route>
        {/* Layout Patient  */}
        <Route>
            <Route path="/patientpage" element={localStorage.getItem('nameRole')=="Patient" ? <PagePatient /> : <LandingPage />} />
            <Route path="/formPatient" element={localStorage.getItem('nameRole')=="Patient" ? <FormPatient /> : <LandingPage />} />
            <Route path="/ContactPatient" element={localStorage.getItem('nameRole')=="Patient" ? <FormContactusPatient /> : <LandingPage />} />
      </Route>
      </Route>
      </Routes>
      </UserProvider>
    </Router>
  );
}
export default App;
