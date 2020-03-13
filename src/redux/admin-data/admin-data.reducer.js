import AdminActionTypes from "./admin-data.types";

const INTIAL_STATE = {
  admin: null,
  isFetching: false,
  errorMessage: undefined
};

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
