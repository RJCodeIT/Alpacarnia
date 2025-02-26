import React, { useState } from "react";
import "./SignInForm.css";
import "../App.css";
import "./OAuth.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../redux/user/userSlice";
import OAuth from "./OAuth";

function SignInForm() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.className]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/signin`,
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/alpacarnia");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="signin-container">
      <h1 className="signin-title">Zaloguj się</h1>
      <div className="signin-form-container">
        <form onSubmit={handleSubmit} className="signin-form">
          <input
            type="email"
            placeholder="email"
            className="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="hasło"
            className="password"
            onChange={handleChange}
          />
          <button disabled={loading} className="signin-button">
            {loading ? "Ładowanie..." : "Zaloguj się"}
          </button>
          <OAuth />
        </form>
      </div>
      <div className="signup-link-div">
        <p>Nie masz konta?</p>
        <Link to={"/alpacarnia/sign-up"}>
          <span className="signin-link-span">Zarejestruj się</span>
        </Link>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}

export default SignInForm;
