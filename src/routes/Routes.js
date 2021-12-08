import { Routes as AppRoutes, Route, Link } from "react-router-dom";
import Login from "../components/forms/login/Login";
import Signup from "../components/forms/signup/Signup";
import Home from "../components/home/Home";
import Profile from "../components/profile/Profile";
import Setting from "../components/setting/Setting";

const Routes = () => {
    return (  
      
        <AppRoutes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/Profile" element={<Profile />} />
     


        </AppRoutes>
    
    );
  };

  export default Routes;