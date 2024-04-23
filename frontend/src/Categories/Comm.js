import React, { useState } from "react";
import "../css/Cp.css";
import {} from "react-router";
import "../css/Comm.css";
import { Link } from "react-router-dom";
import axios from "axios";
import elogo from "../images/images-small-globe.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faFlask,
  faBolt,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

function Comm() {
  const [biodegradable, setbiodegradable] = useState("0");
  const [chemical, setchemical] = useState("0");
  const [electrical, setelectrical] = useState("0");
  const [demolition, setdemolition] = useState("0");

  const handlechange = () => {
    if (
      biodegradable.length !== 0 &&
      chemical.length !== 0 &&
      electrical.length !== 0 &&
      demolition.length != 0
    ) {
      const url = "http://localhost/commadd.php";

      let fData = new FormData();
      fData.append("biodegradable", biodegradable);
      fData.append("chemical", chemical);
      fData.append("electrical", electrical);
      fData.append("demolition", demolition);

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
        <h1 className="namexy"> <FontAwesomeIcon icon={faBuilding} />  Commercial waste</h1>

        <a href="/Dash">
          {" "}
          <img className="img1" src={elogo} alt="logo1" />
        </a>
      </div>
      <div>
        <main className="dombox3">
          <form>
            <h3 className="pick">Enter the Weights(in Kilograms) </h3>

            <div className="inputBox">
              <label htmlFor="Name">
                <FontAwesomeIcon icon={faLeaf} />
                  Biodegradable Waste
              </label>

              <div>
                <input
                  type="text"
                  value={biodegradable}
                  onChange={(e) => setbiodegradable(e.target.value)}
                  name="Name"
                  id="Name"
                  required
                />
              </div>
            </div>

            <div className="inputBox">
              <label htmlFor="Name"><FontAwesomeIcon icon={faFlask} />Chemical Waste</label>
              <div>
                <input
                  type="text"
                  value={chemical}
                  onChange={(e) => setchemical(e.target.value)}
                  name="Name"
                  id="Name"
                  required
                />
                
              </div>
            </div>

            <div className="inputBox">
              <label htmlFor="Name"><FontAwesomeIcon icon={faBolt} />Electrical Waste</label>
              <div>
                <input
                  type="text"
                  value={electrical}
                  onChange={(e) => setelectrical(e.target.value)}
                  name="Name"
                  id="Name"
                  required
                />
                
              </div>
            </div>

            <div className="inputBox">
              <label htmlFor="Name"><FontAwesomeIcon icon={faBuilding} />Demolition Waste</label>
              <div>
                <input
                  type="text"
                  value={demolition}
                  onChange={(e) => setdemolition(e.target.value)}
                  name="Name"
                  id="Name"
                  required
                />
                
              </div>
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

export default Comm;
