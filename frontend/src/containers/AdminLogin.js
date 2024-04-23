import '../css/AdminLogin.css'
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import elogo from "../images/images-small-globe.svg";

function Adminlogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (email.trim() === '' || password.trim() === '') {
            setError('Please fill in all the fields.');
            return;
        }

        if (email !== 'admin@manipal.edu' || password !== 'admin') {
            setError('Invalid email or password.');
            return;
        }

        // Perform any additional logic or API calls here

        navigate('/Dbmenu'); // Navigate to the Dbmenu page
    };

    return (
        <>
            <div className="sign">
                <a href="/">
                    <img className="logo" src={elogo} alt="logo1" />
                </a>
            </div>
            <div>
                <main className="box3">
                    <form>
                        <h3 className="pick">Admin Login</h3>
                        {error && <p className="error">{error}</p>}
                        <div className="inputBox">
                            <label htmlFor="email">Email</label>
                            <input type="text" value={email} onChange={e => setEmail(e.target.value)} name="email" id="email" required />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="password">Password</label>
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} name="password" id="password" required />
                        </div>
                        <button type="submit" onClick={handleLogin} name="" style={{ alignContent: "center" }}>Save</button>
                        <Link className="link1" to="/" style={{ float: 'center' }}>
                            <span className="login-span">Back to Home</span>
                        </Link>
                    </form>
                </main>
            </div>
        </>
    );
}

export default Adminlogin;


