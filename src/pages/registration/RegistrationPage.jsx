import React from "react";
import '../registration/RegistrationPage.css';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";


function RegistrationPage(params) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    let navigate = useNavigate();
    const onSubmit = data => {

        data.blocked = false;
        data.confirmed = true;
        fetch(process.env.REACT_APP_API_URL + "/api/users", {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                navigate('/login');
            })
            .catch((error) => {
                console.error('Error:', error);
                alert(error);
            });
    }

    return (
        <div>
            <h1 className="header">NEW ACCOUNT</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div id="registrationContainer">

                    <label htmlFor="name">NAME*</label>
                    <input type="text" {...register("name", { required: true, maxLength: 100, minLength: 2 })} className="input" />
                    {errors.name?.type === 'required' && "This field is required"}
                    {(errors.name?.type === 'minLength' || errors.name?.type === 'maxLength') && <div className="error">Length of this field must be between 2 and 100 characters</div>}

                    <label htmlFor="lastname">LAST NAME*</label>
                    <input type="text" {...register("lastname", { required: true, maxLength: 100, minLength: 2 })} className="input" />
                    {errors.lastname?.type === 'required' && "This field is required"}
                    {(errors.lastname?.type === 'minLength' || errors.name?.type === 'maxLength') && <div className="error">Length of this field must be between 2 and 100 characters</div>}

                    <label htmlFor="email">EMAIL*</label>
                    <input type="email" {...register("email", { required: true, maxLength: 50 })} className="input" />
                    {errors.email?.type === 'required' && "This field is required"}
                    {errors.email?.type === 'maxLength' && <div className="error">Max Length of this field must be less or equal to 50 characters</div>}

                    <label htmlFor="username">USERNAME*</label>
                    <input type="text" {...register("username", { required: true, maxLength: 20 })} className="input" />
                    {errors.username?.type === 'required' && "This field is required"}
                    {errors.username?.type === 'maxLength' && <div className="error">Max Length of this field must be less or equal to 20 characters</div>}

                    <label htmlFor="password">PASSWORD*</label>
                    <input type="password" {...register("password", { required: true, maxLength: 16, minLength: 8 })} className="input" />
                    {errors.password?.type === 'required' && "This field is required"}
                    {errors.password?.type === 'maxLength' && <div className="error">Length of this field must be between 8 and 16 characters</div>}
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