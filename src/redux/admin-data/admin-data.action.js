import AdminActionTypes from "./admin-data.types";
import {
  db,
  converCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = conllectionsMap => ({
  type: AdminActionTypes.FETCH_ADMIN_START
});

export const fetchCollectionSuccess = conllectionsMap => ({
  type: AdminActionTypes.FETCH_ADMIN_SUCCESS,
  payload: conllectionsMap
});

export const fetchCollectionFailure = errMessage => ({
  type: AdminActionTypes.FETCH_ADMIN_FAILURE,
  payload: errMessage
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = db.collection("admin");
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then(snapshot => {
        const collectionMap = converCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionSuccess(collectionMap));
      })
      .catch(err => dispatch(fetchCollectionFailure(err.message)));
  };
};
