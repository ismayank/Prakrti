import React, { useState } from "react";
import "../css/Cp.css";
import {} from "react-router";
import "../css/Health.css";
import { Link } from "react-router-dom";
import axios from "axios";
import elogo from "../images/images-small-globe.svg";

function Health() {
  const [biomedical, setbiomedical] = useState("0");
  const [plastic, setplastic] = useState("0");
  const [chemical, setchemical] = useState("0");
  const [metal, setmetal] = useState("0");
  const [glass, setglass] = useState("0");

  const handlechange = () => {
    if (
      biomedical.length !== 0 &&
      plastic.length !== 0 &&
      chemical.length !== 0 &&
      metal.length !== 0 &&
      glass.length !== 0
    ) {
      const url = "http://localhost/healthadd.php";

      let fData = new FormData();
      fData.append("biomedical", biomedical);
      fData.append("plastic", plastic);
      fData.append("chemical", chemical);
      fData.append("metal", metal);
      fData.append("glass", glass);

      axios
        .post(url, fData)
        .then((response) => alert(response.data))
        .catch((error) => alert(error));
    }
  };

  return (
    <>
    <div className="bkg">
    <div className="bgxy">
        <h1 className="namexy">HealthCare waste</h1>

        <a href="/Dash">
          {" "}
          <img className="img1" src={elogo} alt="logo1" />
        </a>
      </div>
      <div>
        <main className="dombox4">
          <form>
            <h3 className="pick">Enter the Weights(in Kilograms) </h3>

            <div className="inputBox">
              <label htmlFor="Name">Biomedical Waste</label>
              <input
                type="text"
                value={biomedical}
                onChange={(e) => setbiomedical(e.target.value)}
                name="Name"
                id="Name"
                required
              />
            </div>
            <div className="inputBox">
              <label htmlFor="Name">Plastic Waste</label>
              <input
                type="text"
                value={plastic}
                onChange={(e) => setplastic(e.target.value)}
                name="Name"
                id="Name"
                required
              />
            </div>
            <div className="inputBox">
              <label htmlFor="Name">Chemical Waste</label>
              <input
                type="text"
                value={chemical}
                onChange={(e) => setchemical(e.target.value)}
                name="Name"
                id="Name"
                required
              />
            </div>
            <div className="inputBox">
              <label htmlFor="Name">Metal Waste</label>
              <input
                type="text"
                value={metal}
                onChange={(e) => setmetal(e.target.value)}
                name="Name"
                id="Name"
                required
              />
            </div>
            <div className="inputBox">
              <label htmlFor="Name">Glass Waste</label>
              <input
                type="text"
                value={glass}
                onChange={(e) => setglass(e.target.value)}
                name="Name"
                id="Name"
                required
              />
            </div>

            <Link className="Link" to="/Pay">
              <button
                type="submit"
                onClick={handlechange}
                name=""
                style={{ alignContent: "center" }}
              >
                Save
              </button>
            </Link>

            <Link className="link1" to="/" style={{ float: "center" }}>
              <span className="login-span">Back to Home</span>
            </Link>
          </form>
        </main>
      </div>
    </div>
     
    </>
  );
}

export default Health;
