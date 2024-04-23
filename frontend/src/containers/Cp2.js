import React,{ useState } from 'react';
import '../css/Cp.css';
import {}from "react-router";
import {Link} from "react-router-dom";
import axios from 'axios';
import elogo from'../images/images-small-globe.svg';

function Cp2() {

    
    return (

        <><div className="sign1">
          
            <a href='/Dash'> <img className='img7r' src={elogo} alt='logo1'/></a>
        </div><div>
                <main className="box4">
                <form>
                    <h3 className="pick2">Payment Successful.</h3>
                      
        
                    </form>
                
                </main>
            </div></>
        
    );
}

export default Cp2;

