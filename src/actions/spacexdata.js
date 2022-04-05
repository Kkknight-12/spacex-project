import * as api from "../api";

export const getSpacexData = () => {
  return async (dispatch, getState) => {
    const { data } = await api.fetchSpacexData();
    dispatch({ type: "START_LOADING" });
    dispatch({ type: "FETCH_ALL_DATA", payload: data });
    dispatch({ type: "END_LOADING" });
  };
};

export const getFilterSpacexData = (filterData) => {
  return async (dispatch, getState) => {
    // const {
    //   success_launch: launch_success,
    //   success_landing: land_success,
    //   year: launch_year,
    // } = filterData;
    console.log("filterData", filterData);
    // console.log("success_landing", land_success);
    dispatch({ type: "START_LOADING" });
    const { data } = await api.filterSpacexData(filterData);
    console.log("getFilterSpacexData", data);
    dispatch({ type: "FILTER_DATA", payload: data });
    dispatch({ type: "END_LOADING" });
  };
};

// export const getAllCustomer = (formData) => async (dispatch, getState) => {
//   // console.log('formData', formData)
//   const { data } = await api.fetchAllCustomer();
//   // console.log('DATA from getCustomer', data)
//   dispatch({ type: "FETCH_ALL_CUSTOMER", payload: data });
// };
