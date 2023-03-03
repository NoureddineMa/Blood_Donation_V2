import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import LayoutAuth from "./pages/LayoutAuth";
import LandingPage from "./pages/LandingPage";
import VerifyAccount from "./pages/VerifyAccount";
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import { UserProvider } from "./Context/UserContext";
import ViewPatient from "./pages/Donnateur/ViewPatient";
import PostBloodDonation from "./pages/Donnateur/PostBloodDonation";
import HomePageDonnateur from "./pages/Donnateur/HomePageDonnateur";
import ChangePassword from "./pages/Donnateur/ChangePassword";
import IsLoggedin from "./Utils/IsLoggedin";
import LayoutDonnateur from "./pages/LayoutDonnateur"
import LayoutPatient from "./pages/LayoutPatient";
import LayoutAdmin from "./pages/LayoutAdmin"
import NotFound from "./pages/NotFound";
import HomePagePatient from "./pages/Patient/HomePagePatient";
import NeedBlood from "./pages/Patient/NeedBlood"
import ViewDonnateur from "./pages/Patient/ViewDonnateur"
import HomePageAdmin from "./pages/Admin/HomePageAdmin";
import ViewPatients from "./pages/Admin/ViewPatients"
import ViewDonnateurs from "./pages/Admin/ViewDonnateurs"
import ViewMessages from "./pages/Admin/ViewMessages"
import CheckRole from "./Utils/CheckRole";


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



        {/* should login to see this pages */}
        {/* DONNATEUR */}
        <Route  element={<IsLoggedin />} >
          <Route element={<CheckRole roles={["Donnateur"]} />}  >
                <Route  element={<LayoutDonnateur />} >
                <Route exact  path="/HomePageDonnateur" element={<HomePageDonnateur />}   />
                <Route path="/PostBlood" element={<PostBloodDonation />} />
                <Route path="/ViewPatient" element={<ViewPatient />}   />
                <Route path="/changePassword" element={<ChangePassword />}/>
          </Route>
          </Route> 
        {/*END  DONNATEUR  ROUTES */}


        {/* PATIENT  */}
        <Route element={["Patient"]}>
          <Route  element={<LayoutPatient />} >
                <Route exact  path="/HomePagePatient" element={<HomePagePatient />} />
                <Route path="/NeedBlood" element={<NeedBlood />} />
                <Route path="/ViewDonnateur" element={<ViewDonnateur />} />
                <Route path="/changePassword" element={<ChangePassword />} />
          </Route>
        </Route>
        {/*END  PATIENT  ROUTES */}       



        {/* ADMIN  */}
        <Route element={["Admin"]}>
            <Route  element={<LayoutAdmin />} >
                <Route exact  path="/HomePageAdmin" element={<HomePageAdmin />} />
                <Route path="/ViewPatients" element={<ViewPatients />} />
                <Route path="/ViewDonnateurs" element={<ViewDonnateurs />} />
                <Route path="/ViewMessages" element={<ViewMessages />} />
          </Route>
        </Route>
        {/* END ADMIN ROUTES  */}


        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      </UserProvider>
    </Router>
  );
}
export default App;
