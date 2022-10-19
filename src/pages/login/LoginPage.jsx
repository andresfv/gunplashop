import React from "react";
import '../login/LoginPage.css';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function LoginPage(params) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log("Datos enviados", data);
    }

    return (
        <div>
            <h1 className="header">LOGIN</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div id="loginContainer">
                    <label htmlFor="username">USERNAME</label>
                    <input type="text" {...register("username", { required: true })} className="input" />
                    {errors.name?.type === 'required' && "This field is required"}

                    <label htmlFor="password">PASSWORD</label>
                    <input type="password" {...register("password", { required: true })} className="input" />
                    {errors.name?.type === 'required' && "This field is required"}
                    
                    <Link to={"/"}>Forgot your password?</Link>
                </div>
            
                <input type={"submit"} value="ACCEDER" className="actionButtonLogin" />
                <Link to="/registration">
                <input type={"button"} value="REGISTRATE" className="actionButtonLogin" />
                </Link>
            </form >

        </div >
    )
};

export default LoginPage;