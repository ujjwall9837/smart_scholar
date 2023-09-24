import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import { useState } from "react";
import { resetPassword } from "../services/operations/authAPI";
import { useLocation } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
export const UpdatePassword = () => {
  const { loading } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const { password, confirmPassword } = formData;
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const token = location.pathname.split("/").at(-1);
    dispatch(resetPassword(password, confirmPassword, token));
  };
  return (
    <div className="text-yellow">
      {loading ? (
        <div>
          <Spinner></Spinner>
          <div>Loading...</div>
        </div>
      ) : (
        <div className="text-yellow-25">
          <h1>Choose new password</h1>
          <p>Almost done enter your new password and youre all set</p>
          <form onSubmit={handleOnSubmit}>
            <label>
              <p>
                New Password <sup>*</sup>
              </p>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="Password"
              ></input>
              <span
                onClick={() => {
                  setShowPassword((prev) => !prev);
                }}
              >
                {showPassword ? (
                  <AiFillEyeInvisible fontSize={24} />
                ) : (
                  <AiFillEye fontSize={24} />
                )}
              </span>
            </label>
            <label>
              <p>
                Confim New Password <sup>*</sup>
              </p>
              <input
                required
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleOnChange}
                placeholder="Confirm Password"
              ></input>
              <span
                onClick={() => {
                  setShowConfirmPassword((prev) => !prev);
                }}
              >
                {showConfirmPassword ? (
                  <AiFillEyeInvisible fontSize={24} />
                ) : (
                  <AiFillEye fontSize={24} />
                )}
              </span>
            </label>
            <button type="submit">Reset Password</button>
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
