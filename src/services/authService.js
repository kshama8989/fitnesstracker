const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const registerUser = async(userData)=>{
    const response = await fetch(`${API_BASE_URL}/adduser`,{
        method :'POST',
        headers:{
            'content-Type':'application/json',

        },
        body:JSON.stringify(userData),

    });
    if(!response.ok){
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to register user");

    }
    const successData =await response.json();
    console.log("Success Response Body:",successData);
    return successData;
};

export const loginUser = async (userData) => {
    const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers : {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if(!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "User login failed")
    }
    const successData = await response.json();
    localStorage.setItem("token" , successData.jwtToken);
    console.log("Login Successful:",successData);
    return successData;
};
