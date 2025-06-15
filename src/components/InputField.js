
import React from "react";
//import '/../styles/RegisterPageStyle.css'

const InputField = ({label, type, name, value, onChange}) => {
    return (
        <div className="input-field">
            <label htmlFor="name">{label}</label>
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                required>
            </input>
        </div>
    );
};

export default InputField;
