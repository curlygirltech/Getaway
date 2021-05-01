import { Link } from "react-router-dom";
import React from 'react'
import '../screens/Css Screens/homestyles.css'


export default function Homes(props) {
  const { homes } = props;
  return (
    <div>
      <h3> browse homes</h3>
      {homes.map((home) => (
        <React.Fragment key={home.id}>
          <Link to= {`/homes/${home.id}`}>
        <p>
          {home.description}
          {`rate $${home.rate}`}
        </p>
          <img className= "home-images"
          src= {home.img_url}
          />
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
}
