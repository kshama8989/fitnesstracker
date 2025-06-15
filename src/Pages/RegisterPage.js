import React from "react";
import RegisterForm from "../components/RegisterForm";

const RegisterPage =() =>{
    return(
        <div className="page-backgound">
            <div className="register-page">
            <h1>Welcome to the Registration page for fitness</h1>
            <RegisterForm/>
            </div>
        </div>
    )
}

export default RegisterPage;