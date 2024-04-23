import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions/auth";
import axios from "axios";
import "../css/Login.css";
import elogo from "../images/images-small-globe.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = ({ login, isAuthenticated }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const username = "Mayank";

    login(email, password);
    // navigate(`/Dash/${username}`);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const continueWithGoogle = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`
      );

      window.location.replace(res.data.authorization_url);
    } catch (err) {}
  };

  if (isAuthenticated) {
    return navigate("/Dash");
  }

  return (
    <div className="sign1">
      <a href="/">
        {" "}
        <img className="logo" src={elogo} alt="logo1" />
      </a>
      <div>
        <main className="box3">
          <h3 className="pick">Login your Details</h3>
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
            <div className="inputBox">
              <label htmlFor="password">Password </label>
              <input
                className="form-control"
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
                minLength="6"
                required
              />
              <span className="eye-icon" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div>
            <button className="btn btn-primary" type="submit">
              Login
            </button>

            <button
              className="google-login-button"
              onClick={continueWithGoogle}
            >
              <div className="icon">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="Google Logo"
                />
              </div>
              <div className="text">Sign In with Google</div>
            </button>
            <br />
            {/* <button
            className="btn btn-primary mt-3"
            onClick={continueWithFacebook}
          >
            Continue With Facebook
          </button> */}
            <Link className="link" to="/Signup" style={{ float: "center" }}>
              <span className="login-span">Don't have an account?</span>
            </Link>
            <Link
              className="link"
              to="/reset-password"
              style={{ float: "center" }}
            >
              <span className="login-span">Forgot Password?</span>
            </Link>
          </form>
        </main>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
