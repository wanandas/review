import ReviewActionTypes from "./review.types";

const INTIAL_STATE = {
  review: null,
  isFetch: false,
  errMessage: undefined
};

const reviewReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case ReviewActionTypes.FETCH_REVIEW_START:
      return {
        ...state,
        isFetch: true
      };
    case ReviewActionTypes.FETCH_REVIEW_SUCCESS:
      return {
        ...state,
        isFetch: false,
        review: action.payload
      };
    case ReviewActionTypes.FETCH_REVIEW_FAILURE:
      return {
        ...state,
        isFetch: false,
        errMessage: action.payload
      };
    default:
      return state;
  }
};

export default reviewReducer;
