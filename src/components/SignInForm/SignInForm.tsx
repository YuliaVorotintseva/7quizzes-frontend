import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "../Button/Button";
import PasswordInput from "../PasswordInput/PasswordInput";
import useFormField from "../../utils/useFormField";
import { login } from "../../entities/user/model/userActions";
import { AppDispatch, RootState } from "../../app/storeTypes";

import "./signInForm.css";

const SignInForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const emailField = useFormField();
  const [password, setPassword] = useState<string | null>(null);
  const { isAuthorized } = useSelector((state: RootState) => state.userReducer);

  useEffect(() => {
    if (isAuthorized) {
      navigate("/choose", { replace: true });
    }
  }, [isAuthorized, navigate]);

  const onSubmit = async (element: React.FormEvent) => {
    element.preventDefault();
    await dispatch(
      login({
        email: emailField.value,
        password: password,
      }),
    );
  };

  return (
    <form className="form__sign_in" onSubmit={onSubmit}>
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
      <PasswordInput setPassword={setPassword} />
      <Button
        isSubmit={true}
        className="submit__sign_in"
        onClick={() => {}}
        text="continue"
      />
      <div className="info__sign_in">
        <p>Don’t have an account yet?</p>
        <Link to="/registration" className="link__register">
          Register instead
        </Link>
      </div>
    </form>
  );
};

export default SignInForm;
