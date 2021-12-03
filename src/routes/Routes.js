import { Routes as AppRoutes, Route, Link } from "react-router-dom";
import Login from "../components/forms/login/Login";
import Signup from "../components/forms/singup/Signup";


const Routes = () => {
    return (  
        <AppRoutes>
          <Route path="/" element={<Login />} />
          <Route path="about" element={<Signup />} />
        </AppRoutes>
    
    );
  };

  export default Routes;