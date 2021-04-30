import React from "react";

export default function Homes(props) {
  const { homes } = props;
  return (
    <div>
      <h3> browse homes</h3>
      {homes.map((home) => (
        <React.Fragment key={home.id}>
        <p>
          {home.description}
          {home.img_url}
          {`rate $${home.rate}`}
        </p>
        </React.Fragment>
      ))}
    </div>
  );
}
