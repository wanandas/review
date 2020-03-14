import React, { useState, useEffect } from "react";

import "./reviews.styles.scss";
import ReviewList from "../../components/review-list/review-list.component";
import { createStructuredSelector } from "reselect";
import { selectReviewForView } from "../../redux/review/review.selectors";
import { connect } from "react-redux";
import { fetchReviewStart } from "../../redux/review/review.action";

const ReviewsComponent = ({ card, fetchReviewStart }) => {
  const [search, setSearch] = useState("");

  const handerChange = e => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetchReviewStart();
  }, [fetchReviewStart]);

  const filteredCard = card.filter(card =>
    card.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="review-container">
      <form>
        <input
          className="search-input"
          type="text"
          placeholder="Anime name..."
          onChange={handerChange}
          value={search}
        />
      </form>
      <ReviewList card={filteredCard} />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchReviewStart: () => dispatch(fetchReviewStart())
});

const mapStateToProps = createStructuredSelector({
  card: selectReviewForView
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsComponent);
