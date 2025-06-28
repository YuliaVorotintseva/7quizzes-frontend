import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PasswordInput from "../PasswordInput/PasswordInput";
import Button from "../Button/Button";
import useFormField from "../../utils/useFormField";
import { registration } from "../../entities/user/model/userActions";
import { AppDispatch, RootState } from "../../app/storeTypes";

import "./signUpForm.css";

const SignUpForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const emailField = useFormField();
  const usernameField = useFormField();
  const [password, setPassword] = useState<string | null>(null);
  const { isAuthorized } = useSelector((state: RootState) => state.userReducer);

  useEffect(() => {
    if (isAuthorized) {
      navigate("/signin", { replace: true });
    }
  }, [isAuthorized]);

  const onSubmit = async (element: React.FormEvent) => {
    element.preventDefault();
    await dispatch(
      registration({
        username: usernameField.value,
        email: emailField.value,
        password: password,
      }),
    );
  };

  return (
    <form className="form__sign_up" onSubmit={onSubmit}>
      <p className="title__sign_up">Registration</p>
      <div className="username__sign_up">
        <label htmlFor="username">Name</label>
        <input
          id="username"
          className="username"
          type="text"
          tabIndex={2}
          pattern="^[a-zA-Z0-9\.\+\-_]{5,}$"
          {...usernameField}
        />
      </div>
      <div className="email__sign_up">
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
      <PasswordInput setPassword={setPassword} />
      <Button
        isSubmit={true}
        className="submit__sign_up"
        onClick={() => {}}
        text="continue"
      />
      <div className="info__sign_up">
        <p>Already have un account?</p>
        <Link to="/signin" className="link__login">
          Sign in
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
