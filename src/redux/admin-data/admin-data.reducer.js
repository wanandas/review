import AdminActionTypes from "./admin-data.types";
import { db } from "../../firebase/firebase.utils";

const INTIAL_STATE = {
  admin: [],
  isFetching: false,
  errorMessage: undefined
};

const renderReview = () => {
  db.collection("admin")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        INTIAL_STATE.admin.push(doc.data());
      });
    });
};

renderReview();

const adminReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case AdminActionTypes.FETCH_ADMIN_START:
      return {
        ...state,
        isFetching: true
      };

    case AdminActionTypes.FETCH_ADMIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        admin: action.payload
      };

    case AdminActionTypes.FETCH_ADMIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default adminReducer;
