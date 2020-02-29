import React from "react";
import ReviewCard from "../../components/review-card/reviewCard.component";

import "./review.styles.scss";
import "./data";
import data from "./data";

class ReviewComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      card: data
    };
  }

  render() {
    const card = this.state.card;
    return (
      <div className="review-container">
        <h1>Reivew</h1>
        <div className="card-content">
          {card.map(({ id, ...otherProps }) => (
            <ReviewCard key={id} {...otherProps} />
          ))}
        </div>
      </div>
    );
  }
}

export default ReviewComponent;
