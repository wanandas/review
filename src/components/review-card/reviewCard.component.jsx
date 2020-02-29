import React from "react";
import "./reviewCard.styles.scss";

const ReviewCard = props => {
  return (
    <div className="card">
      <img src={props.img} alt="anime-cover" />
      <div className="content">
        <h2 className="name">{props.name}</h2>
        <p className="logline">{props.logline}</p>
        <button className="btn">View</button>
      </div>
    </div>
  );
};

export default ReviewCard;
