import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        At Flavour Fusion, we're dedicated to bringing exceptional cuisine right to your doorstep. Founded by food enthusiasts, we've partnered with top local restaurants to offer a diverse menu that suits every taste. Our commitment to quality, convenience, and culinary delight is what sets us apart. Join us in redefining the way you experience food. Welcome to Flavour Fusion.        </p>
      </div>
    </div>
  );
}

export default About;