import React, { useState } from "react";
import "../css/Cp.css";
import {} from "react-router";
import "../css/Agri.css";
import { Link } from "react-router-dom";
import axios from "axios";
import elogo from "../images/images-small-globe.svg";

function Agri() {
  const [crop, setcrop] = useState(0);
  const [livestock, setlivestock] = useState(0);
  const [plant, setplant] = useState(0);
  const [wood, setwood] = useState(0);

  const handlechange = () => {
    if (
      crop.length !== 0 &&
      livestock.length !== 0 &&
      plant.length !== 0 &&
      wood.length !== 0
    ) {
      const url = "http://localhost/agriadd.php";

      let fData = new FormData();
      fData.append("crop", crop);
      fData.append("livestock", livestock);
      fData.append("plant", plant);
      fData.append("wood", wood);

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
        <h1 className="namexy">Agriculture waste</h1>

        <a href="/Dash">
          {" "}
          <img className="img1" src={elogo} alt="logo1" />
        </a>
        {/* <h2 className='name2'>Information </h2> */}
      </div>
      <div>
        <main className="dombox1">
          <form>
            <h3 className="pick">Enter the Weights(in Kilograms) </h3>

            <div className="inputBox">
              <label htmlFor="Name">Crop Waste</label>
              <input
                type="text"
                value={crop}
                onChange={(e) => setcrop(e.target.value)}
                name="Name"
                id="Name"
                required
              />
            </div>
            <div className="inputBox">
              <label htmlFor="Name">Livestock Waste</label>
              <input
                type="text"
                value={livestock}
                onChange={(e) => setlivestock(e.target.value)}
                name="Name"
                id="Name"
                required
              />
            </div>
            <div className="inputBox">
              <label htmlFor="Name">Plant Waste</label>
              <input
                type="text"
                value={plant}
                onChange={(e) => setplant(e.target.value)}
                name="Name"
                id="Name"
                required
              />
            </div>
            <div className="inputBox">
              <label htmlFor="Name">Wood Waste</label>
              <input
                type="text"
                value={wood}
                onChange={(e) => setwood(e.target.value)}
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

export default Agri;
