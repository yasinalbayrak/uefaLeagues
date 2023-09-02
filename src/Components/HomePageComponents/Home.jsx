import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import uefaLogo from '../../images/uefa.png';

import { useTranslation } from 'react-i18next';

import Navbar from '../NavigationBarComponents/Navbar';
import ecl from "../../images/UEFA_Europa_Conference_League.svg.png";
import el from "../../images/resized_el.png";
import cl from "../../images/UEFA_Champions_League.svg.png";
import "./Home.css"
import { useNavigate } from 'react-router-dom';

function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [selectedContainer, setSelectedContainer] = useState(null);

  const handleHover = (containerId) => {
    if (selectedContainer !== containerId) {
      setSelectedContainer(containerId);
    }
  };

  const handleHoverOut = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      // Ensure the mouse is leaving the parent container, not entering a child element
      setSelectedContainer(null);
    }
  };

  const containerStyle = (containerId) => {
    const opacity = selectedContainer === null ? 1 : selectedContainer === containerId ? 1: 0.4;
    return {
      opacity: opacity,
      transition: 'opacity 0.3s ease',
    };
  };
  return (
    <div id='whole-page'>
      <Navbar />

      {/* Content */}
      <div className="content-container">
        <div className="row">
          {/* First Section */}
          <div className="col-md-4 cnt"
            onMouseOver={() => handleHover('cl')}
            onMouseOut={handleHoverOut}
            style={containerStyle('cl')}
            onClick={()=>{
              console.log("hi")
              navigate('/europe?league=cl');

            }}
            >
            <img
              id="cl"
              src={cl}
              alt="Image 1"
              className="img-fluid"
            />
          </div>

          {/* Second Section */}
          <div className="col-md-4 cnt"
            onMouseOver={() => handleHover('el')}
            onMouseOut={handleHoverOut}
            style={containerStyle('el')}
            onClick={()=>{
              navigate('/europe?league=el');
            }}
          >
            <img
              id="el"
              src={el}
              alt="Image 2"
              className="img-fluid"
            />
          </div>

          {/* Third Section */}
          <div className="col-md-4 cnt"
            onMouseOver={() => handleHover('ecl')}
            onMouseOut={handleHoverOut}
            style={containerStyle('ecl')}
            onClick={()=>{
              navigate('/europe?league=ecl');
            }}
            >
            <img
              id="ecl"
              src={ecl}
              alt="Image 3"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
