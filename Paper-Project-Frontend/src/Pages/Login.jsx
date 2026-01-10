import { useForm } from "react-hook-form";
import login from "./../api/AuthApi";
import "../Styles/Login.css"

const Login = () => {
  const { register, handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;

  async function onSubmit(data) {
    try {
      await login(data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="paper-page-center">
      <div className="login-page">
        <form className="card shadow shadow-large shadow-hover" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="paper-title">Login</h1>

          <div className="paper-field">
            <label className="paper-label">Email</label>
            <input className="paper-input" {...register("email")} />
          </div>

          <div className="paper-field">
            <label className="paper-label">Password</label>
            <input
              className="paper-input"
              type="password"
              {...register("password")}
            />
          </div>

          <button className="paper-btn paper-btn-primary" disabled={isSubmitting}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

