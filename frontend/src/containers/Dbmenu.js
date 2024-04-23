import React from 'react';
import { Link } from "react-router-dom";
import '../css/Dbmenu.css'
import elogo from "../images/images-small-globe.svg";

function DatabaseMenu() {
  return (
    <div className='signn'>
    <div className="dbmenu-container">
      <h1 className='ad'>.</h1>
      <Link to='/'>
        <img className='logo' src={elogo} alt='logo'/>
      </Link>
      <div className="menu-items">
        <div className="menu-item">
          <h2 className="menu-item-title">1.1. Signup Database</h2>
          <p className="menu-item-description">View user Database.</p>
          <Link className="menu-item-button" to="/Regdb">View Database</Link>
        </div>
        <div className="menu-item">
          <h2 className="menu-item-title">1.2. Login Activity</h2>
          <p className="menu-item-description">View login Database</p>
          <Link className="menu-item-button" to="/LoginData">View login Database</Link>
        </div>
        <div className="menu-item">
          <h2 className="menu-item-title">1.3. Pickup Database</h2>
          <p className="menu-item-description">Pickup Database</p>
          <Link className="menu-item-button" to="/Pickdb"> View Pickup user database</Link>
        </div>
        <div className="menu-item">
          <h2 className="menu-item-title">1.4. Delivery Database</h2>
          <p className="menu-item-description">Delivery Database</p>
          <Link className="menu-item-button" to="/Deliverysh"> View Delivery user database</Link>
        </div>
       
        
        <div className="menu-item">
          <h2 className="menu-item-title">1.5. Domestic Database</h2>
          <p className="menu-item-description">Domestic Database</p>
          <Link className="menu-item-button" to="/Domshow">Domestic user database</Link>
        </div>
        <div className="menu-item">
          <h2 className="menu-item-title">1.6. Agriculture Database</h2>
          <p className="menu-item-description">Agriculture Database</p>
          <Link className="menu-item-button" to="/Agrishow">Agriculture user database</Link>
        </div>
        <div className="menu-item">
          <h2 className="menu-item-title">1.7. Industrial Database</h2>
          <p className="menu-item-description">Industrial Database</p>
          <Link className="menu-item-button" to="/Indshow">Industrial user database</Link>
        </div>
        <div className="menu-item">
          <h2 className="menu-item-title">1.8. Commercial Database</h2>
          <p className="menu-item-description">Commercial Database</p>
          <Link className="menu-item-button" to="/Commshow">Commercial user database</Link>
        </div>
        <div className="menu-item">
          <h2 className="menu-item-title">1.9. HealthCare Database</h2>
          <p className="menu-item-description">HealthCare Database</p>
          <Link className="menu-item-button" to="/Healthshow">HealthCare user database</Link>
        </div>
        <div className="menu-item">
          <h2 className="menu-item-title">2.1. Update Name </h2>
          <p className="menu-item-description">Update User Database</p>
          <Link className="menu-item-button" to="/Updb">Update Name</Link>
        </div>
        <div className="menu-item">
          <h2 className="menu-item-title">2.2. Update Password</h2>
          <p className="menu-item-description">Update user Database</p>
          <Link className="menu-item-button" to="/Updpass">Update Password </Link>
        </div>
        <div className="menu-item">
          <h2 className="menu-item-title">2.3. Update Phone no.</h2>
          <p className="menu-item-description">Update User Database</p>
          <Link className="menu-item-button" to="/Updphno">Update Phone no </Link>
        </div>
        <div className="menu-item">
          <h2 className="menu-item-title">3.1. Delete User Database</h2>
          <p className="menu-item-description">Delete user Details</p>
          <Link className="menu-item-button" to="/Eddb">Delete  Database</Link>
        </div>
        <div className="menu-item">
          <h2 className="menu-item-title">3.2. Delete Pickup Database</h2>
          <p className="menu-item-description">Delete pickup Details</p>
          <Link className="menu-item-button" to="/Dlpick">Delete Database</Link>
        </div>
        <div className="menu-item">
          <h2 className="menu-item-title">3.3. Delete Order Database</h2>
          <p className="menu-item-description">Delete order Details</p>
          <Link className="menu-item-button" to="/Dlorder">Delete  Database</Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default DatabaseMenu;
