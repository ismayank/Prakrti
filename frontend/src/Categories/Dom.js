import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
  faUtensils,
  faBottleWater,
  faTshirt,
  faWineGlass,
  faBolt,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import elogo from "../images/images-small-globe.svg";
import "../css/Dom.css";

function Dom() {
  const [food, setFood] = useState("0");
  const [plastic, setPlastic] = useState("0");
  const [textile, setTextile] = useState("0");
  const [glass, setGlass] = useState("0");
  const [metal, setMetal] = useState("0");
  const [paper, setPaper] = useState("0");

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = () => {
    if (
      food.length !== 0 &&
      plastic.length !== 0 &&
      textile.length !== 0 &&
      glass.length != 0 &&
      metal.length != 0 &&
      paper.length != 0
    ) {
      const url = "http://localhost/dmsadd.php";

      let formData = new FormData();
      formData.append("food", food);
      formData.append("plastic", plastic);
      formData.append("textile", textile);
      formData.append("glass", glass);
      formData.append("metal", metal);
      formData.append("paper", paper);

      axios
        .post(url, formData)
        .then((response) => alert(response.data))
        .catch((error) => alert(error));
    }
  };

  return (
    <div className="bkg">
      <div className="bgxy">
        <h1 className="namexy">
          <FontAwesomeIcon icon={faHome} /> Domestic waste
        </h1>

        <a href="/Dash">
          {" "}
          <img className="img1" src={elogo} alt="logo1" />
        </a>
      </div>
      <div>
        <main className="dombox">
          <form>
            <h3 className="pick">Enter the Weights (in Kilograms)</h3>

            <div className="inputBox">
              <label htmlFor="food">
                <FontAwesomeIcon icon={faUtensils} /> Food Waste
              </label>
              <input
                type="text"
                value={food}
                onChange={(e) => handleInputChange(e, setFood)}
                name="food"
                id="food"
                required
              />
            </div>
            <div className="inputBox">
              <label htmlFor="plastic">
                <FontAwesomeIcon icon={faBottleWater} /> Plastic Waste
              </label>
              <input
                type="text"
                value={plastic}
                onChange={(e) => handleInputChange(e, setPlastic)}
                name="plastic"
                id="plastic"
                required
              />
            </div>
            <div className="inputBox">
              <label htmlFor="textile">
                <FontAwesomeIcon icon={faTshirt} /> Textile Waste
              </label>
              <input
                type="text"
                value={textile}
                onChange={(e) => handleInputChange(e, setTextile)}
                name="textile"
                id="textile"
                required
              />
            </div>
            <div className="inputBox">
              <label htmlFor="glass">
                <FontAwesomeIcon icon={faWineGlass} /> Glass Waste
              </label>
              <input
                type="text"
                value={glass}
                onChange={(e) => handleInputChange(e, setGlass)}
                name="glass"
                id="glass"
                required
              />
            </div>
            <div className="inputBox">
              <label htmlFor="metal">
                <FontAwesomeIcon icon={faBolt} /> Metal Waste
              </label>
              <input
                type="text"
                value={metal}
                onChange={(e) => handleInputChange(e, setMetal)}
                name="metal"
                id="metal"
                required
              />
            </div>
            <div className="inputBox">
              <label htmlFor="paper">
                <FontAwesomeIcon icon={faFileAlt} /> Paper Waste
              </label>
              <input
                type="text"
                value={paper}
                onChange={(e) => handleInputChange(e, setPaper)}
                name="paper"
                id="paper"
                required
              />
            </div>

            <Link className="Link" to="/Pay">
              <button type="submit" onClick={handleSubmit}>
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
  );
}

export default Dom;
