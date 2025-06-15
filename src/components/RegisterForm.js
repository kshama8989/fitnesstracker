import React, { useState } from "react";
import InputField from "./InputField";
import '../style/RegisterPage.css';
import { registerUser,loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
const RegisterForm = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: '',
        phoneNumber: ''
    });
    const [isSignin, setSignIn] = useState(true);

    const [error, setError] = useState(null);

    const [successMessage, setSuccessMessage] = useState("");

    const toggleSignIn = () => {
        setSignIn(!isSignin);
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
          
          if(isSignin){
            const response = await loginUser(formData);
            const token = localStorage.getItem("token");
            if(token){
              navigate('home');
            }
            setSuccessMessage(response.message);
            setError("");
          } else{
            if (!/^\d{10}$/.test(formData.phoneNumber)) {
            alert("Phone number must be exactly 10 digits");
            return;
          }
            const response = await registerUser(formData);
            setSuccessMessage(response.username + " successfully registered!");
            setError("");
          }   

        } catch (error) {
            setSuccessMessage("");
            setError(error.message);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>{isSignin ? "Sign In" : "Register"}</h2>
            <div>
                {/* <h2>Register to FitnessApp</h2> */}

                <InputField className="form-group" label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
                <InputField className="form-group" label="Password" name="password" type="password" value={formData.password} onChange={handleChange}/>
                {
                    (!isSignin) &&
                    <InputField className="form-group" label="Username" name="username" type="text" value={formData.username} onChange={handleChange}/>
                }
                {
                    (!isSignin) &&
                    <InputField className="form-group" label="PhoneNumber" name="phonenumber" type="number" value={formData.phoneNumber} onChange={handleChange} />
                }
                {
                    (!isSignin) &&
                    <InputField className="form-group" label="Role" name="role" type="text" value={formData.role} onChange={handleChange}/>
                }



                <button type="submit">{isSignin ? "Sign in" : "Register"}</button>
                <p>
                    {isSignin ? (
                        <>
                            Don't have an account?{" "}
                            <span className="login-text" onClick={toggleSignIn}>
                                Sign up
                            </span>
                        </>
                    ) : (
                        <>
                            Already have an account?{" "}
                            <span className="login-text" onClick={toggleSignIn}>
                                Log in
                            </span>
                        </>
                    )}
                </p>
            </div>
        </form>
    )
}

export default RegisterForm;