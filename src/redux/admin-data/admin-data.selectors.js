import { createSelector } from "reselect";

const selectAdminData = state => state.admin;

export const selectAdminDataSec = createSelector(
  [selectAdminData],
  admin => admin.admin
);

export const selectAdminForView = createSelector([selectAdminDataSec], admin =>
  admin ? Object.keys(admin).map(key => admin[key]) : []
);

export const selectIsCollectionFetching = createSelector(
  [selectAdminData],
  admin => admin.isFetching
);
