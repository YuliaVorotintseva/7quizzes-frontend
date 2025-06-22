import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../Button/Button";

import "./signInForm.css";
import PasswordInput from "../PasswordInput/PasswordInput";
import useFormField from "../../utils/useFormField";

const SignInForm = () => {
  const navigate = useNavigate();
  const emailField = useFormField();

  const serverResponse = {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6",
  };
  localStorage.setItem("authToken", serverResponse.token);

  return (
    <>
      <form className="form__sign_in" method="POST" action="/">
        <p className="title__sign_in">Sign in</p>
        <div className="email__sign_in">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="email"
            type="email"
            tabIndex={1}
            pattern="^[a-zA-Z0-9\.\+\-_]+@[a-z]+\.[a-z]{2,}$"
            {...emailField}
          />
        </div>
        <PasswordInput />
        <Button
          className="submit__sign_in"
          onClick={() => navigate("/")}
          text="continue"
        />
        <div className="info__sign_in">
          <p>Don’t have an account yet?</p>
          <Link to="/registration" className="link__register">
            Register instead
          </Link>
        </div>
      </form>
    </>
  );
};

export default SignInForm;
