import axios from "axios";

const url = "https://api.spacexdata.com/v3/launches?limit=8";

const API = axios.create({ baseURL: url });

export const fetchSpacexData = () => API.get(`/`);
export const filterSpacexData = (filterData) => {
  // const {
  //   success_launch: launch_success ?? "",
  //   success_landing: land_success,
  //   year: launch_year,
  // } = filterData;
  const launch_success = filterData?.success_launch ?? "";
  const land_success = filterData?.success_landing ?? "";
  const launch_year = filterData?.year ?? "";
  console.log(
    "sendD",
    `&launch_success=${launch_success}&land_success=${land_success}&launch_year=${launch_year}`
  );
  return API.get(
    `&launch_success=${launch_success}&land_success=${land_success}&launch_year=${launch_year}`
  );
};
// export const fetchCustomerBySearch = (key, value) =>
//   API.get(`/customer?${key}=${value}`);
// export const fetchAllService = () => API.get(`/service`);
// export const fetchServiceBySearch = (key, value) =>
//   API.get(`/service?${key}=${value}`);
// //
// export const createServiceRequest = (data) => API.post(`/service`, data);
// export const createCustomerRequest = (data) => API.post(`/customer`, data);
