import React from "react";

import "./reviews.styles.scss";
import { db } from "../../firebase/firebase.utils";
import ReviewList from "../../components/review-list/review-list.component";

class ReviewsComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      card: [],
      search: ""
    };
  }

  renderReview() {
    db.collectionGroup("review")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.state.card.push(doc.data());

          this.setState({
            card: this.state.card
          });
        });
      });
  }

  handerChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  componentDidMount() {
    this.renderReview();
  }

  render() {
    const { card, search } = this.state;
    const filteredCard = card.filter(card =>
      card.name.toLowerCase().includes(search.toLowerCase())
    );

    console.log(this.state.card);
    return (
      <div className="review-container">
        <form>
          <input
            className="search-input"
            type="text"
            placeholder="Anime name..."
            onChange={this.handerChange}
            value={this.state.search}
          />
        </form>
        <ReviewList card={filteredCard} />
      </div>
    );
  }
}

export default ReviewsComponent;
