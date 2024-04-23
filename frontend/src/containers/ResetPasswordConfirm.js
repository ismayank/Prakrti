import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"; // Import useParams
import { connect } from "react-redux";
import { reset_password_confirm } from "../actions/auth";
import axios from "axios";
import "../css/Login.css";
import elogo from "../images/images-small-globe.svg";

const ResetPasswordConfirm = ({ reset_password_confirm }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    re_new_password: "",
    new_password: "",
  });

  const navigate = useNavigate();
  const { new_password, re_new_password } = formData;

  const { uid, token } = useParams(); // Use useParams to get uid and token

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await reset_password_confirm(uid, token, new_password, re_new_password);
      setRequestSent(true);
      navigate("/Login"); // Use navigate to navigate to the desired page.
    } catch (err) {
      // Handle error
    }
  };

  const continueWithGoogle = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`
      );

      window.location.replace(res.data.authorization_url);
    } catch (err) {
      // Handle error
    }
  };

  if (requestSent) {
    navigate("/Dash"); // Use navigate to navigate to the desired page.
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
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="inputBox">
              <label htmlFor="new_password">New Password</label>
              <input
                className="form-control"
                type="password"
                name="new_password"
                value={new_password}
                onChange={(e) => onChange(e)}
                minLength="6"
                required
              />
            </div>
            <div className="inputBox">
              <label htmlFor="re_new_password">Re-type Password</label>
              <input
                className="form-control"
                type="password"
                name="re_new_password"
                value={re_new_password}
                onChange={(e) => onChange(e)}
                minLength="6"
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

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);
