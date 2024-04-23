import React, { useState } from 'react';
import '../css/Pickup.css';
import elogo from '../images/images-small-globe.svg';
import { Link } from "react-router-dom";
import axios from 'axios';


function Pickup() {
    const [name, setName] = useState('');
    const [phno, setPhno] = useState('');
    const [add, setAdd] = useState('');
    const [date, setDate] = useState('');
    const [nameError, setNameError] = useState('');
    const [phnoError, setPhnoError] = useState('');
    const [addError, setAddError] = useState('');
    const [dateError, setDateError] = useState('');

    const handlechange = (e) => {
        e.preventDefault();

        // Reset previous error messages
        setNameError('');
        setPhnoError('');
        setAddError('');
        setDateError('');

        // Check if all fields are filled
        if (name.trim() === '') {
            setNameError('Please enter your name.');
            return;
        }

        if (phno.trim() === '') {
            setPhnoError('Please enter your phone number.');
            return;
        }

        if (add.trim() === '') {
            setAddError('Please enter your address.');
            return;
        }

        if (date.trim() === '') {
            setDateError('Please select a date.');
            return;
        }

        // Check phone number format
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phno)) {
            setPhnoError('Please enter a valid 10-digit phone number.');
            return;
        }

        // Check if the selected date is from today or later
        const selectedDate = new Date(date);
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);

        if (selectedDate < currentDate) {
            setDateError('Please select a date from today or later.');
            return;
        }

        const url = 'http://localhost/pickadd.php';

        const fData = new FormData();
        fData.append('name', name);
        fData.append('phno', phno);
        fData.append('add', add);
        fData.append('date', date);

        axios
            .post(url, fData)
            .then(response => {
                alert(response.data);
                // Navigate to "Cate" page
                window.location.href = "/Pay";
            })
            .catch(error => {
                alert(error);
                // Redirect to current page
                window.location.href = "/Pay";
            });
    }


    return (

        <><div className="sign">
            <a href='/'> <img className='logo' src={elogo} alt='logo1'/></a>
        </div><div>
                <main className="pbox">

                    <form>
                        <h3 className="pick">Delivery Details</h3>
                        
                        <div className="inputBox">
                            <label htmlFor="Name">Name</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="Name" id="Name"
                                required />
                        </div>
                        {nameError && <p className="error">{nameError}</p>}
                        <div className="inputBox">
                            <label htmlFor="phone"> Phone number</label>
                            <input type="phone" value={phno} onChange={(e) => setPhno(e.target.value)} name="phone no" id="phone no"

                                required />
                        </div>
                        {phnoError && <p className="error">{phnoError}</p>}
                        <div className="inputBox">
                            <label htmlFor="Address"> Address</label>
                            <input type="text" value={add} onChange={(e) => setAdd(e.target.value)} name="address" id="address"

                                required />
                        </div>
                        {addError && <p className="error">{addError}</p>}
                        <div className="inputBox">
                            <label htmlFor="date"> Date</label>
                            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} name="date" id="date"

                                required />
                        </div>
                        {dateError && <p className="error">{dateError}</p>}

                        <Link className="Link" to="/Cate" ><button type="submit" onClick={handlechange} name="" style={{ alignContent: "center" }}>Save</button></Link>

                        <Link className="link" to="/" style={{ float: "center" }}><span className="login-span">Back to Home</span></Link>

                    </form>
                </main>

            </div></>

    );
}

export default Pickup;

































// import React, { useState } from 'react';
// import '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/Pickup.css';
// import { Link, useNavigate } from "react-router-dom";
// import elogo from '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/images-small-globe.svg';
// import axios from 'axios';

// function Pickup() {
//   const navigate = useNavigate();

//   const [name, setName] = useState('');
//   const [phno, setPhno] = useState('');
//   const [add, setAdd] = useState('');
//   const [date, setDate] = useState('');
//   const [error, setError] = useState('');

//   const handlechange = () => {
//     if (name.trim() === '' || phno.trim() === '' || add.trim() === '' || date.trim() === '') {
//       setError('Please fill in all fields');
//       return;
//     }

//     if (!validatePhoneNumber(phno)) {
//       setError('Invalid phone number');
//       return;
//     }

//     const today = new Date().toISOString().split('T')[0];
//     if (date < today) {
//       setError('Invalid date');
//       return;
//     }

//     const url = 'http://localhost/pickadd.php';

//     let fData = new FormData();
//     fData.append('name', name);
//     fData.append('phno', phno);
//     fData.append('add', add);
//     fData.append('date', date);

//     axios
//       .post(url, fData)
//       .then(response => {
//         alert(response.data);
//         navigate('/Cate');
//       })
//       .catch(error => alert(error));
//   };
//   const validatePhoneNumber = (phoneNumber) => {
//     const phoneRegex = /^\d{10}$/;
//     return phoneRegex.test(phoneNumber);
//   }

