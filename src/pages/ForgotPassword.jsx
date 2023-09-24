import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { getPasswordResetToken } from "../services/operations/authAPI";
export const ForgotPassword = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getPasswordResetToken(email, setEmailSent));
  };
  return (
    <div className="text-white flex justify-center items-center">
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          <h1>{!emailSent ? "Reset your password" : "Check your email"}</h1>
          <p>
            {" "}
            {!emailSent
              ? "Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery"
              : `We have sent the email to \n ${email}`}
          </p>
          <form onSubmit={handleOnSubmit}>
            {!emailSent && (
              <label>
                {" "}
                <p>Email Address:</p>
                <input 
                  className="text-black"
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                ></input>
              </label>
            )}
            <button type="submit">
              {!emailSent ? "Reset Password" : "Resend Email"}
            </button>
          </form>
          <div>
            <Link to={"/login"}>
              <p>Back to login</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default ForgotPassword;
