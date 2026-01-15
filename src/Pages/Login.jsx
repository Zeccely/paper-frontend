import { useForm } from "react-hook-form";
import { useState } from "react";
import { login } from "./../api/sessionApi";
import { createUser } from "../api/UserApi";
import "../Styles/Login.css"
import Confetti from "react-confetti";

const Login = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [mode, setMode] = useState("login")
  const { register, handleSubmit, reset, formState } = useForm();
  const { isSubmitting } = formState;

  async function onSubmit(data) {
    try {
      if (mode === "login") {
        await login({
          username: data.username,
          password: data.password,
        });

      } else {
        await createUser({
          username: data.username,
          email: data.email,
          password: data.password,
        });
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
        setMode("login");
        reset({ email: data.email, password: "" });
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="paper-page-center">
      <div className="login-page">
        <form className="card shadow shadow-large shadow-hover" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="paper-title">
            {mode === "login" ? "Login" : "Register"}
          </h1>

          {mode === "register" && (
            <div className="paper-field">
              <label className="paper-label">Username</label>
              <input className="paper-input" {...register("username")} />
            </div>
          )}

          <div className="paper-field">
            <label className="paper-label">Email</label>
            <input className="paper-input" {...register("email")} />
          </div>

          <div className="paper-field">
            <label className="paper-label">Password</label>
            <input className="paper-input" type="password" {...register("password")} />
          </div>

          <button className="paper-btn paper-btn-primary" disabled={isSubmitting}>
            {mode === "login" ? "Login" : "Create account"}
          </button>

          <button
            type="button"
            className="paper-btn"
            disabled={isSubmitting}
            onClick={() => setMode(mode === "login" ? "register" : "login")}
          >
            {mode === "login" ? "I don't have an account" : "I already have an account"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;