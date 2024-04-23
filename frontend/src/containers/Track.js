import React,{ useState } from 'react';
import '../css/Track.css';
import {}from "react-router";
import {Link} from "react-router-dom";
import axios from 'axios';
import elogo from'../images/images-small-globe.svg';

function Track() {

const [name, setname] = useState('');
const [phno, setphno] = useState('');


const handlechange = () =>
{if (name.length !== 0 &&phno.length !== 0 ) {
    const url = 'http://localhost/pict.php'

    let fData = new FormData();
    fData.append('name', name);
    fData.append('phno', phno);
    

    axios.post(url, fData)
        .then(response => alert(response.data))
        .catch(error => alert(error));
}

}
    
    return (

        <><div className="bgt">
            <a href='/Dash'> <img className='img7r' src={elogo} alt='logo1'/></a>
           
            
        </div><div>
                <main className="box1">
                    <form>
                    <h3 className="pick1">Track Pickup</h3>
                        <div className="inputBox1">
                            <label htmlFor="Name">Name</label>
                            <input type="text" value={name} onChange={(e) => setname(e.target.value)} name="Name" id="Name"
                                required />
                        </div>
                        <div className="inputBox1">
                            <label htmlFor="phone"> Phone number</label>
                            <input type="phone" value={phno} onChange={(e) => setphno(e.target.value)} name="phone no" id="phone no"

                                required />
                        </div>
                        <button type="submit1" onClick={handlechange} name="" style={{ alignContent: "center" }}>Save</button>

                        <Link className="link" to="/" style={{ float: "center" }}><span className="login-span">Back to Home</span></Link>
        
                    </form>
                </main>
            </div></>
        
    );
}

export default Track;

