import React from "react";
import "./Login.css";

const Login = () => {
  const register = (e) => {};
  const loginToApp = () => {};
  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg"
        alt=""
      />
      <form>
        <input type="text" placeholder="Full name" />
        <input type="text" placeholder="Profile Pic URL(Optional)" />
        <input type="email" placeholder="enter email" />
        <input type="password" placeholder="password" />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
