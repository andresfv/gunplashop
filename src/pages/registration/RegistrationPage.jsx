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
                    <input type="text" {...register("name", { required: true, maxLength:100, minLength:2 })} className="input" />
                    {errors.name?.type === 'required' && "This field is required"}
                    {(errors.name?.type === 'minLength' || errors.name?.type === 'maxLength') && <div className="error">Length of this field must be between 2 and 100 characters</div>}

                    <label htmlFor="lastname">LAST NAME</label>
                    <input type="text" {...register("lastname", { required: true, maxLength:100, minLength:2  })} className="input" />
                    {errors.name?.type === 'required' && "This field is required"}
                    {(errors.name?.type === 'minLength' || errors.name?.type === 'maxLength') && <div className="error">Length of this field must be between 2 and 100 characters</div>}

                    <label htmlFor="email">EMAIL</label>
                    <input type="email" {...register("email", { required: true,  maxLength:50 })} className="input" />
                    {errors.name?.type === 'required' && "This field is required"}
                    {errors.name?.type === 'maxLength' && <div className="error">Max Length of this field must be less or equal to 50 characters</div>}

                    <label htmlFor="username">USERNAME</label>
                    <input type="text" {...register("username", { required: true,  maxLength:20})} className="input" />
                    {errors.name?.type === 'required' && "This field is required"}
                    {errors.name?.type === 'maxLength' && <div className="error">Max Length of this field must be less or equal to 20 characters</div>}

                    <label htmlFor="password">PASSWORD</label>
                    <input type="password" {...register("password", { required: true, maxLength:16, minLength:8 })} className="input" />
                    {errors.name?.type === 'required' && "This field is required"}
                    {errors.name?.type === 'maxLength' && <div className="error">Length of this field must be between 8 and 16 characters</div>}
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