import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "../Pages/RegisterPage";

const AppRoutes =() =>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<RegisterPage />}/>
                {/* <Route element={<PrivateRoute />}>
                    <Route path="home" element={<BeforeLoginHome />} /> 
                </Route> */}
            </Routes>
        </Router>
    )
}

export default AppRoutes;
