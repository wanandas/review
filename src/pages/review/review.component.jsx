import React from "react";
import "./review.styles.scss";

export const Review = props => {
  const review = props.location.state;
  console.log(review);
  return (
    <div className="review-contain">
      <h1>{review.name}</h1>
      <div className="contain">
        <div>
          <img className="review-in-img" src={`${review.img}`} alt="review" />
        </div>
        <div className="review-detail">
          <div className="genres">GENRES : {`${review.genres}`} </div>
          <div className="score">SCORE : {`${review.score}`} </div>
          <div className="reason">
            {review.reason.map(reason => {
              return (
                <div>
                  {reason.reasonname} ({reason.reasonscore})
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="commend">{review.comment}</div>
    </div>
  );
};
