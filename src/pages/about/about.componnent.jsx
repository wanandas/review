import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./about.styles.scss";
import AdCard from "../../components/ad-card/ad-card.component";
import { createStructuredSelector } from "reselect";
import { selectAdminForView } from "../../redux/admin-data/admin-data.selectors";

import { fetchCollectionsStart } from "../../redux/admin-data/admin-data.action";

const AboutComponent = ({ admin, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="card-container">
        {admin.map(({ id, ...otherProps }) => (
          <AdCard key={id} {...otherProps} />
        ))}
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

const mapStateToProps = createStructuredSelector({
  admin: selectAdminForView
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutComponent);
