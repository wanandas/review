import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { config } from "./firebase.config";

firebase.initializeApp(config);

export const db = firebase.firestore();
export const auth = firebase.auth();

export const converCollectionsSnapshotToMap = collections => {
  const transformedCollections = collections.docs.map(doc => {
    const { img, info, name, position } = doc.data();

    return {
      id: doc.id,
      img,
      info,
      name,
      position
    };
  });

  return transformedCollections.reduce((accumelator, collection) => {
    accumelator[collection.position.toLowerCase()] = collection;
    return accumelator;
  }, {});
};

export const converCollectionReviewSnapshotToMap = collections => {
  const transformedReview = collections.docs.map(doc => {
    const {
      comment,
      genres,
      img,
      logline,
      name,
      reason,
      reviewer,
      score
    } = doc.data();

    return {
      id: doc.id,
      comment,
      genres,
      img,
      logline,
      name,
      reason,
      reviewer,
      score
    };
  });
  return transformedReview.reduce((accumelator, collection) => {
    accumelator[collection.name] = collection;
    return accumelator;
  }, {});
};

export default firebase;
