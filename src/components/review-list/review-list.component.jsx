import React from "react";
import ReviewItem from "../review-item/review-item.component";

const ReviewList = props => {
  return (
    <div className="card-content">
      {props.card.map(card => {
        return <ReviewItem key={card.id} card={card} />;
      })}
    </div>
  );
};

export default ReviewList;
