import React, { useState } from 'react';
import axios from 'axios';
import '../css/Updb.css';
import { Link, useNavigate } from "react-router-dom";
import { } from "react-router";
import elogo from '../images/images-small-globe.svg';

function Updpass() {
  const navigate = useNavigate();
  const [pass, setpass] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleUpdate = () => {
    // Validate the form fields
    if (email.trim() === '' || pass.trim() === '') {
      setError('Please fill in all fields');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format');
      return;
    }

    const url = 'http://localhost/updpasuser.php';

    let formData = new FormData();
    formData.append('email', email);
    formData.append('pass', pass);

    axios.post(url, formData)
      .then(response => {
        alert(response.data);
        navigate('/');
      })
      .catch(error => alert(error));
  };

  return (
    <>
      <div className="signt1">
        <a href='/'> <img className='img7r' src={elogo} alt='logo1' /></a>
      </div>
      <div>
        <main className="pbox2">
          <form>
            <h3 className="pick">Enter Your New Password</h3>
            <div className="inputBox">
              <label htmlFor="Email">Email iD</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" required />
            </div>
            <div className='inputBox'>
              <label htmlFor="name">New Password:</label>
              <input type="text" id="name" value={pass} onChange={(e) => setpass(e.target.value)} />
            </div>
            {error && <p className="error-message">{error}</p>}
             
              <button type="submit" onClick={handleUpdate} style={{ alignContent: "center" }}>Update </button>
            
          </form>
        </main>
      </div>
    </>
  );
}

export default Updpass;
