import React, { useState } from "react";
import "../css/Cp.css";
import {} from "react-router";
import "../css/Ind.css";
import { Link } from "react-router-dom";
import axios from "axios";
import elogo from "../images/images-small-globe.svg";

function Ind() {
  const [biodegradable, setbiodegradable] = useState("0");
  const [chemical, setchemical] = useState("0");
  const [textile, settextile] = useState("0");
  const [plastic, setplastic] = useState("0");
  const [ewaste, setewaste] = useState("0");
  const [metal, setmetal] = useState("0");
  const [glass, setglass] = useState("0");
  const [hazardous, sethazardous] = useState("0");

  const handlechange = () => {
    if (
      biodegradable.length !== 0 &&
      chemical.length !== 0 &&
      textile.length !== 0 &&
      plastic.length != 0 &&
      ewaste.length != 0 &&
      glass.length != 0 &&
      hazardous.length != 0
    ) {
      const url = "http://localhost/indadd.php";

      let fData = new FormData();
      fData.append("biodegradable", biodegradable);
      fData.append("chemical", chemical);
      fData.append("textile", textile);
      fData.append("plastic", plastic);
      fData.append("ewaste", ewaste);
      fData.append("metal", metal);
      fData.append("glass", glass);
      fData.append("hazardous", hazardous);

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
        <h1 className="namexy">Industrial waste</h1>

        <a href="/Dash">
          {" "}
          <img className="img1" src={elogo} alt="logo1" />
        </a>
      </div>
      <div>
        <main className="dombox2">
          <form>
            <h3 className="pick">Enter the Weights(in Kilograms) </h3>

            <div className="inputBox">
              <label htmlFor="Name">Biodegradable Waste</label>
              <input
                type="text"
                value={biodegradable}
                onChange={(e) => setbiodegradable(e.target.value)}
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
              <label htmlFor="Name">Textile Waste</label>
              <input
                type="text"
                value={textile}
                onChange={(e) => settextile(e.target.value)}
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
              <label htmlFor="Name">E-Waste</label>
              <input
                type="text"
                value={ewaste}
                onChange={(e) => setewaste(e.target.value)}
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
            <div className="inputBox">
              <label htmlFor="Name">Hazardous Waste</label>
              <input
                type="text"
                value={hazardous}
                onChange={(e) => sethazardous(e.target.value)}
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

export default Ind;
