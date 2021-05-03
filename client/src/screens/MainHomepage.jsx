import React from "react";
import { Link } from "react-router-dom";
import '../screens/Css Screens/mainhomepage.css'

export default function MainHomepage() {
  return (
    <div className="background">

    <div className="intro">
      <h4>Your Home Away from Home</h4>
      <div className="intro-buttons">
        <Link to="/login">
          <button>Let's Getaway</button>
        </Link>
        <Link to= "/login">
        <button>Become a Host</button>
        </Link>
      </div>
    </div>
    </div>
  );
}
