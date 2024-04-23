import React, { useState } from "react";
import {} from "react-router";
import "../css/Verify.css";
import elogo from "../images/images-small-globe.svg";
function Verify() {
  return (
    <>
      <div className="sign1">
        <a href="/">
          {" "}
          <img className="img7r" src={elogo} alt="logo1" />
        </a>
      </div>
      <div>
        <main className="box4">
          <form>
            <h3 className="pick3">Kindly Check Your Mail</h3>
          </form>
        </main>
      </div>
    </>
  );
}

export default Verify;
