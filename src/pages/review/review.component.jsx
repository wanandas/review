import React from "react";
import ReviewCard from "../../components/review-card/reviewCard.component";

import "./review.styles.scss";
import "./data";
import { db } from "../../firebase/firebase.utils";

class ReviewComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      card: []
    };
  }

  async componentDidMount() {
    const reviewRef = db.collectionGroup("review");
    const newData = [];
    await reviewRef
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          newData.push(doc.data());
        });
      })
      .catch(err => {
        console.log("Error getting documents", err);
      });
    this.setState({
      card: newData
    });

    console.log(this.state.card);
  }

  render() {
    let card = this.state.card.map(({ id, ...otherProps }) => {
      return <ReviewCard key={id} {...otherProps} />;
    });

    return (
      <div className="review-container">
        <h1>Reivew</h1>
        <div className="card-content">{card}</div>
      </div>
    );
  }
}

export default ReviewComponent;
