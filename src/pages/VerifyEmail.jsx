import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OTPInput from "react-otp-input";
import { sendOtp, signUp } from "../services/operations/authAPI";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export const VerifyEmail = () => {
  const { signupData, loading } = useSelector((state) => state.auth);
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!signupData) {
      navigate("/signup");
    }
  }, []);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const {
      accountType,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = signupData;
    dispatch(
      signUp(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        navigate
      )
    );
  };
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="text-white">
          <h1>Verify Email</h1>
          <p>
            A verification mail has been sent to you, Eneter the code below{" "}
          </p>
          <form onSubmit={handleOnSubmit}>
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => <input {...props} />}
            ></OTPInput>
            <button type="submit">Verify Email</button>
          </form>

          <div>
            <div>
              <Link to={"/login"}>
                <p>Back to login</p>
              </Link>
            </div>
            <button
              onClick={() => {
                dispatch(sendOtp(signupData.email, navigate));
              }}
            >
              Resend it
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
