import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ 
        backgroundImage: `url(${BannerImage})`,
       
      }}>
      <div className="headerContainer">
      <h1>
  <strong >FLAVOUR FUSION</strong>
</h1>

        <p><b>Explore culinary delights delivered to your door </b></p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>        
      
  );
}

export default Home;