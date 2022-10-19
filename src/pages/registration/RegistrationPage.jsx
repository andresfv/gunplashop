import React from "react";
import '../registration/RegistrationPage.css';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function RegistrationPage(params) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log("Datos enviados", data);
    }

       return (
        <div>
            <h1 className="header">NEW ACCOUNT</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div id="registrationContainer">
                  
                    <label htmlFor="name">NAME</label>
                    <input type="text" {...register("name", { required: true })} className="input" />

                    <label htmlFor="lastname">LAST NAME</label>
                    <input type="text" {...register("lastname", { required: true })} className="input" />

                    <label htmlFor="email">EMAIL</label>
                    <input type="email" {...register("email", { required: true })} className="input" />

                    <label htmlFor="username">USERNAME</label>
                    <input type="text" {...register("username", { required: true })} className="input" />

                    <label htmlFor="password">PASSWORD</label>
                    <input type="password" {...register("password", { required: true })} className="input" />
                </div>
                <input type={"submit"} value="SEND" className="actionButtonReg" />
                <Link to={"/login"}>
                <input type={"button"} value="LOGIN" className="actionButtonReg" />
                </Link>
            </form >
        </div >
    )
};

export default RegistrationPage;