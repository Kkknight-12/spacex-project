import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getSpacexData } from "../../actions/spacexdata";
import SpaceCards from "../../components/SpaceCards";
import Loader from "../../components/Loader";

export default function HomePage() {
  const dispatch = useDispatch();
  const { spacexData, isLoading } = useSelector((state) => state.spacexReducer);
  console.log("spacexData", isLoading);
  //   const { mission_name, mission_id, launch_year, links, launch_success } =
  //     spacexData;

  useEffect(() => {
    // dispatch(getSpacexData());
  }, [dispatch]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div class="row row-cols-1 mt-3 row-cols-md-4 g-3">
          {spacexData.map((data) => {
            return (
              <div class="col">
                <div class="card space-cards">
                  <SpaceCards key={data.launch_date_unix} {...data} />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
