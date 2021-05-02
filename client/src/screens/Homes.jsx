import { Link } from "react-router-dom";
import React from "react";
import "../screens/Css Screens/homestyles.css";

export default function Homes(props) {
  const { homes } = props;
  return (
      <div>
        <h3> browse homes</h3>
    <div className="homes-parent-div">
      {homes.map((home) => (
        <React.Fragment key={home.id}>
          <div className= "home-card">
            <Link to={`/homes/${home.id}`}>
              <div className= "middle">

            <h3>{home.title}</h3>
            <p>{`rate $${home.rate}`}
            </p>
            <img className="home-images" src={home.img_url} />
              </div>
          </Link>
          </div>
        </React.Fragment>
      ))}
    </div>
      </div>
  );
}
