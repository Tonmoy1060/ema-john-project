import React from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Signup = () => {

   const navigate = useNavigate();
   const location = useLocation();
  const from = location.state?.from?.pathname || "/";

   const [
      createUserWithEmailAndPassword,
      user,
      loading,
    ] = useCreateUserWithEmailAndPassword(auth);

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirm, setConfirm]  = useState('');
   const [error, setError]  = useState('');

   const handleEmail = event => {
      setEmail(event.target.value);
   };
   const handlePassword = event => {
      setPassword(event.target.value);
   };
   const handleConfirm = event => {
      setConfirm(event.target.value);
   };
   const handleSubmit = event => {
      event.preventDefault();
      if(password !== confirm){
         setError('two pass must same');
         return;
      }
      if(password.length < 6){
         setError('Please provide more than 6 character');
         return;
      }
      createUserWithEmailAndPassword(email, password);
   }
   if(user){
      navigate(from, { replace: true });
   }
  return (
    <div className="form-control">
      <div>
        <p className="form-name">Sign Up</p>

        <form onSubmit={handleSubmit} action="">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmail} type="email" name="email" required />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePassword} type="password" name="password" required />
          </div>

          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input onBlur={handleConfirm} type="password" name="confirm-password" required />
          </div>
          <p style={{color:'red'}}>{error}</p>
          <input className="form-submit" type="submit" value="Sign Up" />
        </form>
        <p>Already Registered? <Link className="form-link" to='/login'>Login</Link></p>
      </div>
    </div>
  );
};

export default Signup;
