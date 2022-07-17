import React, { useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  if(user){
    navigate(from, { replace: true });
  }
  return (
    <div className="form-control">
      <div>
        <p className="form-name">Login</p>
        <form onSubmit={handleSubmit} action="">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmail} type="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePassword}
              type="password"
              name="password"
              required
            />
          </div>
          <p style={{color:'red'}}>{error?.message}</p>
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p>
          new to ema-john?{" "}
          <Link className="form-link" to={"/signup"}>
            Please Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
