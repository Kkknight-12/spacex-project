import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getSpacexData } from "../actions/spacexdata";
import "./spaceCards.css";

export default function SpaceCards(props) {
  const {
    mission_name,
    flight_number,
    mission_id,
    launch_year,
    links: { mission_patch },
    launch_success,
  } = props;
  //   const dispatch = useDispatch();
  //   const { spacexData } = useSelector((state) => state.spacexReducer);
  //   console.log("spacexData", spacexData);
  //   const { mission_name, mission_id, launch_year, links, launch_success } =
  //     spacexData;

  //   useEffect(() => {
  //     dispatch(getSpacexData());
  //   }, []);

  return (
    <div>
      {/* <div
        className="card"
        style={{ width: "18rem", marginBottom: "10px", padding: "10px" }}
      >
        <img src={mission_patch} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5>Mission Name: {mission_name}</h5>
          <h5>Flight Number :{flight_number}</h5>
          <p class="card-text">Mission Ids: {mission_id[0]}</p>
          <p>Successfull Launch: {launch_success ? "true" : "false"}</p>
          <p>Successfull Landing: </p>
        </div>
      </div> */}
      {/* <div class="card-group">
        <div class="card">
          <img src={mission_patch} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5>Mission Name: {mission_name}</h5>
            <h5>Flight Number :{flight_number}</h5>
            <p class="card-text">Mission Ids: {mission_id[0]}</p>
            <p>Successfull Launch: {launch_success ? "true" : "false"}</p>
            <p>Successfull Landing: </p>
          </div>
        </div>
      </div> */}

      {/* <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card"> */}
      <img src={mission_patch} className="card-img-top img-card" alt="..." />
      <div class="card-body">
        {/* <h5 class="card-title">Card title</h5> */}
        <p>
          {" "}
          <strong> Mission Name:</strong> {mission_name ?? "-"}
        </p>
        <p>
          {" "}
          <strong>Flight Number :</strong>
          {flight_number}
        </p>
        <p class="card-text">
          <strong>Mission Ids:</strong> {mission_id[0] ?? "-"}
        </p>
        <p>
          {" "}
          <strong>Successfull Launch: </strong>{" "}
          {launch_success ? "true" : "false"}
        </p>
        <p>
          {" "}
          <strong>Successfull Landing: </strong>
        </p>
      </div>
      {/* </div>
        </div>
      </div> */}
    </div>
  );
}
