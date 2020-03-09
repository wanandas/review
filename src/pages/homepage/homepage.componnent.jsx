import React from "react";
import "./homepage.styles.scss";

class HomepageComponent extends React.Component {
  // componentDidMount() {
  //   data.forEach(function(obj) {
  //     db.collection("review")
  //       .add({
  //         id: obj.id,
  //         genres: obj.genres,
  //         name: obj.name,
  //         img: obj.img,
  //         score: obj.score,
  //         reason: obj.reason,
  //         comment: obj.comment,
  //         logline: obj.logline,
  //         reviewer: obj.reviewer
  //       })
  //       .then(function(docRef) {
  //         console.log("Document written with ID: ", docRef.id);
  //       })
  //       .catch(function(error) {
  //         console.error("Error adding document: ", error);
  //       });
  //   });
  // }

  render() {
    return <div className="homepage-container"></div>;
  }
}

export default HomepageComponent;
