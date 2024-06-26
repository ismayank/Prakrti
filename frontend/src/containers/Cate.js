
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faIndustry, faBuilding, faClinicMedical, faSeedling,faTag } from '@fortawesome/free-solid-svg-icons';
import elogo from '../images/images-small-globe.svg';
import '../css/Cate.css';

function Category({ to, title, description, icon }) {
  return (
    <div className="category">
      <Link to={to} className="category-link">
        <FontAwesomeIcon icon={icon} className="category-icon" />
        <span>{title}</span>
      </Link>
      <p className="category-description">{description}</p>
    </div>
  );
}

function Cate() {
  const categories = [
    {
      to: "/Dom",
      title: "Domestic Waste",
      description: "Domestic waste is the waste material generated by households. This waste can be comprised of non-Hazardous Waste and hazardous waste.",
      icon: faHome,
    },
    {
      to: "/ind",
      title: "Industrial Waste",
      description: "Industrial waste is the waste produced by industrial activity which includes any material that is rendered useless during a manufacturing process.",
      icon: faIndustry,
    },
    {
      to: "/Comm",
      title: "Commercial Waste",
      description: "Commercial waste consists of waste from premises used mainly for a trade or business. Excluding household, agricultural, or industrial waste.",
      icon: faBuilding,
    },
    {
      to: "/Health",
      title: "HealthCare Waste",
      description: "Healthcare waste is all the waste generated by healthcare facilities, medical laboratories, and biomedical research facilities, as well as waste from minor or scattered sources.",
      icon: faClinicMedical,
    },
    {
      to: "/Agri",
      title: "Agriculture Waste",
      description: "Agricultural Waste is unwanted or unsalable materials produced wholly from agricultural operations directly related to growing crops or raising animals for the primary purpose of making a profit.",
      icon: faSeedling,
    },
  ];

  return (
    <div className="bg">
      <h1 className="namex"> <FontAwesomeIcon icon={faTag} />Categories</h1>
      <a href='/Dash'>  <img className="imgx" src={elogo} alt="logo1" /></a>

      {categories.map((category, index) => (
        <Category key={index} {...category} />
      ))}
    </div>
  );
}

export default Cate;
