import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../actions/auth';
import axios from 'axios';
import "../css/Signup.css";
import elogo from "../images/images-small-globe.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Signup = ({ signup, isAuthenticated }) => {
    const [accountCreated,setAccountCreated] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name:'',
        email: '',
        password: '',
        re_password: '' 
    });

    const navigate = useNavigate();
    const { name, email, password ,re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if(password === re_password){
            signup( name, email, password, re_password);
            setAccountCreated(true);

        }

        
    }; 

    const continueWithGoogle = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`)

            window.location.replace(res.data.authorization_url);
        } catch (err) {

        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    if (isAuthenticated) {
        return navigate('/Signup');
    }
    if (accountCreated) {
        return navigate('/verify');
    }

    return (
        <div className="sign1">
      <a href="/">
        {" "}
        <img className="logo" src={elogo} alt="logo1" />
      </a>
      <div>
        <main className="box2">
          <h3 className="pick">Register your Details</h3>
            <form onSubmit={e => onSubmit(e)}>
            <div className="inputBox">
            <label htmlFor="Name">Name</label>
                    <input
                        className='form-control'
                        type='text'
                        // placeholder='Enter your Name'
                        name='name'
                        value={name}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className="inputBox">
                <label htmlFor="Name">Email</label>
                    <input
                        className='form-control'
                        type='email'
                        // placeholder='Enter your Email'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className="inputBox">
                {/* <span className="eye-icon" onClick={togglePasswordVisibility}>
                                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                </span> */}
                <label htmlFor="Name">Password </label>
                    <input
                        className='form-control'
                        type={showPassword ? 'text' : 'password'}
                        // placeholder='Enter Password'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <div className="inputBox">
                <label htmlFor="Name">Confirm Password</label>
                    <input
                        className='form-control'
                        type='password'
                        
                        name='re_password'
                        value={re_password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <button className='btn btn-primary' type='submit'>Signup</button>
           
                <button className="google-login-button" onClick={continueWithGoogle}>
            <div className="icon">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google Logo"
              />
            </div>
            <div className="text">Sign In with Google</div>
          </button>
            {/* <button className='btn btn-primary mt-3' onClick={continueWithFacebook}>
                Continue With Facebook
            </button> */}
            {/* <p className='mt-3'>
                Don't have an account? <Link to='/signup'>Sign Up</Link>
            </p> */}
            {/* <p className='mt-3'>
                Forgot your Password? <Link to='/reset-password'>Reset Password</Link>
            </p> */}
            <Link className="link" to="/Login" style={{ float: 'center' }}>
                            <span className="login-span">Already have an account</span>
                        </Link>
            </form>
        </main>
      </div>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(Signup);