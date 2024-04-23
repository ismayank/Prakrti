import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { verify } from "../actions/auth";

import {} from "react-router";
// import {Link} from "react-router-dom";
// import axios from 'axios';
import "../css/Activate.css";
import elogo from "../images/images-small-globe.svg";

const Activate = ({ verify }) => {
  const [verified, setVerified] = useState(false);
  const navigate = useNavigate();
  const { uid, token } = useParams();

  const verify_account = () => {
    verify(uid, token);
    setVerified(true);
  };

  if (verified) {
    navigate("/Login");
  }

  return (
    <>
      <div className="sign1">
        <a href="/">
          {" "}
          <img className="logo" src={elogo} alt="logo1" />
        </a>
      </div>
      <div>
        <main className="box5">
          <form>
            <h3 className="pick8">Verify your Account</h3>

            <button
              className="btn btn-primary"
              onClick={verify_account}
              type="submit"
            >
              Verify
            </button>
          </form>
        </main>
      </div>
    </>
  );
};

export default connect(null, { verify })(Activate);
