import React from "react";
import "./reviewCard.styles.scss";
import { Link } from "react-router-dom";

const ReviewItem = props => {
  return (
    <div className="card">
      <img src={props.card.img} alt="anime-cover" />
      <div className="content">
        <h2 className="name">{props.card.name}</h2>
        <p className="logline">{props.card.logline}</p>
        <Link
          className="btn"
          to={{
            pathname: `/review/item/${props.card.id}`,
            state: props.card
          }}
          onClick={() => console.log(props.card.id)}
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default ReviewItem;
