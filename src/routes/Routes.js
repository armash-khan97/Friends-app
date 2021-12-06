import { Routes as AppRoutes, Route, Link } from "react-router-dom";
import Login from "../components/forms/login/Login";
import Signup from "../components/forms/signup/Signup";
import Home from "../components/home/Home";
import Setting from "../components/setting/Setting";

const Routes = () => {
    return (  
      
        <AppRoutes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home" element={<Home />} />
           <Route path="/setting" element={<Setting />} />

        </AppRoutes>
    
    );
  };

  export default Routes;