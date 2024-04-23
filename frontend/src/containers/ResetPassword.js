import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { reset_password } from "../actions/auth";
import axios from "axios";
import "../css/Login.css";
import elogo from "../images/images-small-globe.svg";

const ResetPassword = ({ reset_password }) => {
    const [requestSent,setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

  const navigate = useNavigate();
  const { email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const username = "Mayank";

    reset_password(email);
    setRequestSent(true);
    // navigate(`/Dash/${username}`);
  };

  const continueWithGoogle = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`
      );

      window.location.replace(res.data.authorization_url);
    } catch (err) {}
  };

  if (requestSent) {
    return navigate("/verify");
  }

  return (
    <div className="sign1">
      <a href="/">
        {" "}
        <img className="logo" src={elogo} alt="logo1" />
      </a>
      <div>
        <main className="box3">
          <h3 className="pick">Reset Password</h3>
          {/* <p>Sign into your Account</p> */}
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="inputBox">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Reset Password
            </button>

          </form>
        </main>
      </div>
    </div>
  );
};


export default connect(null, {reset_password})(ResetPassword);
