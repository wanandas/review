import React from "react";
import "./ad-card.styles.scss";

const AdCard = props => (
  <div className="adcard-container">
    <div className="avatar">
      <img
        src={props.img}
        alt="photos"
        style={{ higth: 150, width: 150 }}
      ></img>
    </div>
    <h2>{props.name}</h2>
    <h4>{props.position}</h4>
    <p>{props.info}</p>
  </div>
);

export default AdCard;
