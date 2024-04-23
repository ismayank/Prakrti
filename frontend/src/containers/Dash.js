import React from "react";
import { Link } from "react-router-dom";
import elogo from "../images/images-small-globe.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faCalendar,
  faShoppingBag,
  faTruck,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../css/Dash.css";

function Dash({ username }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Add your logout logic here, such as dispatching an action or removing the user session
    navigate("/");
    console.log("Logout clicked");
  };

  return (
    <div className="backg">

      <div className="dashboard">
        <div className="header1">
          <h1 className="greeting">Hi Mayank{username}!</h1>
          
          <p className="welcome-message">
            Welcome to our comprehensive website where you can easily track your
            garbage collection, schedule pickups, and explore our diverse range
            of products on our dedicated products page.
          </p>
          <div className="logout-button" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} />
          </div>
      
        </div>

        <div className="section">
          <Link to="/Pickup" className="section-link">
            <FontAwesomeIcon icon={faCalendar} />
            Pickup Schedule
          </Link>
          <p className="section-description">
            Experience hassle-free waste collection with our convenient doorstep
            pickup service.
            Simply book a pickup slot on our website, and our dedicated team
            will arrive at your doorstep at the scheduled time. Whether it's
            recyclable materials, electronic waste, or household items, we
            handle it all. Our trained professionals ensure safe and
            eco-friendly disposal methods, so you can have peace of mind knowing
            your waste is being managed responsibly. Don't let waste pile up;
            let us take care of it for you. Join us in creating a cleaner and
            greener future. Schedule your pickup today!
          </p>
        </div>

        <div className="section">
          <Link to="/Order" className="section-link">
            <FontAwesomeIcon icon={faShoppingBag} />
            Products
          </Link>
          <p className="section-description">
            Embrace sustainability with our diverse range of eco-friendly
            products, thoughtfully crafted from recycled materials. From
            fashion-forward accessories to functional home essentials, each item
            combines style and conscience. Make a conscious choice for the
            planet while enjoying unique designs and join us in making a lasting
            impact through sustainable shopping. Explore our collection and
            discover the joy of eco-conscious living today.
          </p>
        </div>

        <div className="section">
          <Link to="/Track" className="section-link">
            <FontAwesomeIcon icon={faTruck} />
            Track
          </Link>
          <p className="section-description">
            Stay informed and track your order every step of the way with our
            seamless tracking system. With just a few clicks, you can easily
            monitor the progress of your package from our warehouse to your
            doorstep. Our user-friendly interface provides real-time updates,
            ensuring you have complete visibility and peace of mind. Experience
            hassle-free tracking and never wonder about the whereabouts of your
            order again. Simply log in to our website and track your order
            effortlessly. Your satisfaction is our priority, and we strive to
            keep you informed throughout the entire delivery process.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dash;
