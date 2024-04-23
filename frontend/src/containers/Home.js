import React from 'react';
import { } from "react-router";
import Footer from '../components/Footer'
import '../css/Home.css';
import mind from '../images/images-volunteer_hero.svg';
import aim from '../images/aim.png';
import leaf from '../images/leaf.png';
import road from '../images/road.svg';
import elogo from '../images/images-small-globe.svg';
import Chat from '../Chat';


function Home() {
    return (
        <div className='home'>
            <h4 className="he"> Prakrti </h4>
            <a href='/'> <img className='imgh' src={elogo} alt='logo1' /></a>
            <div className="menu">

                {/* <a href="/Order">Products</a>
                <a href="/Track">Track</a> */}
                <a href="/Signup"> Register </a>
                <a href="/Login">User login</a>
                <a href="/Adminlogin">Admin Login</a>
                <a href="/Aboutme">About Me</a>


                <img className='img1r' src={mind} alt='logo1' />
                <img className='img2r' src={aim} alt='logo1' />
                <img className='img3r' src={leaf} alt='logo1' />
                <img className='imgr9' src={leaf} alt='logo1' />
                <img className='img4r' src={road} alt='logo1' />

            </div>
            <Chat />
            <p className="ds"> Recycling management is a crucial aspect of environmental sustainability.
                Recycling helps conserve natural resources, reduce greenhouse gas emissions, and decrease landfill waste.
                As a responsible citizen, it is important to make recycling a part of our daily routine.</p>
            <p className="ds">Our website offers a convenient garbage pickup scheduling and tracking feature.
                We understand that managing waste can be challenging, especially for busy households and businesses.
                That's why we've made it easy to schedule pickups and track your waste management activity.</p>
            <p className="aim">The aim of this project is to establish an integrated waste management system that effectively collects</p>
            <p className="aim2"> separates, treats, and disposes of garbage waste from various sectors in an environmentally sustainable manner.</p>
            <h3 className='obj'>Objective</h3>
            <p className="aim3">
                The objective of this project is to oversee the collection, storage of different types of wastes </p>
                 <p className="aim2">such as domestic,industrial etc. and how it is segregated for their effective treatment. </p>
                 <p className="aim2"> All these processes are carried out as environment friendly as possible, </p>
                 <p className="aim2">then these wastes are treated on basis of how useful and profitable they are in the market.
            </p>
            <p className="aim2">Furthermore, the system employs advanced technologies and efficient practices to ensure</p>
            <p className="aim2">  proper disposal of hazardous wastein compliance with environmental regulations, prioritizing </p>
            <p className="aim2">    the safety of both the environment and the community.</p>

            <Footer /> 
        </div>
    );
}

export default Home;
