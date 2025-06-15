import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "../Pages/RegisterPage";
import HomePage from "../Pages/HomePage";

const AppRoutes =() =>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<RegisterPage />}/>
                {/* <Route element={<PrivateRoute />}> */}
                    <Route path="home" element={<HomePage />} /> 
                {/* </Route> */}
            </Routes>
        </Router>
    )
}

export default AppRoutes;
