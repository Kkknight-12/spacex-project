import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getFilterSpacexData, getSpacexData } from "../../actions/spacexdata";
import "./sideBar.css";
const initialState = {
  year: "",
  success_landing: "",
  success_launch: "",
};
export default function SideBar() {
  const [sendData, setSendData] = useState(initialState);
  const dispatch = useDispatch();

  const filterYear = (year) => {
    setSendData({ ...sendData, year: year });
  };

  const resetData = () => {
    dispatch(getSpacexData());
  };

  useEffect(() => {
    dispatch(getFilterSpacexData(sendData));
  }, [sendData, dispatch]);

  return (
    <div>
      <div class="card mt-4" style={{ width: "15rem" }}>
        <div class="card-body">
          <h5 class="card-title text-center fw-bolder mb-4">
            Filters Title Treatment
          </h5>
          <div class="d-flex justify-content-end refresh-data">
            <i
              onClick={resetData}
              class="fa-solid fa-arrow-rotate-right fa-lg pb-2 refresh-data"
            ></i>
          </div>
          <p class="card-text fw-bold">Launch Year</p>

          <button
            onClick={() => filterYear(2006)}
            className="btn mt-0 m-3 btn-primary"
          >
            2006
          </button>
          <button
            onClick={() => filterYear(2007)}
            className="btn mt-0 m-3  btn-primary"
          >
            2007
          </button>
          <button
            onClick={() => filterYear(2008)}
            className="btn m-3  btn-primary"
          >
            2008
          </button>
          <button
            onClick={() => filterYear(2009)}
            className="btn m-3  btn-primary"
          >
            2009
          </button>
          <button
            onClick={() => filterYear(2010)}
            className="btn m-3  btn-primary"
          >
            2010
          </button>
          <button
            onClick={() => filterYear(2011)}
            className="btn m-3  btn-primary"
          >
            2011
          </button>
          <button
            onClick={() => filterYear(2012)}
            className="btn m-3  btn-primary"
          >
            2012
          </button>
          <button
            onClick={() => filterYear(2013)}
            className="btn m-3  btn-primary"
          >
            2013
          </button>
          <button
            onClick={() => filterYear(2014)}
            className="btn m-3  btn-primary"
          >
            2014
          </button>
          <button
            onClick={() => filterYear(2015)}
            className="btn m-3  btn-primary"
          >
            2015
          </button>
          <button
            onClick={() => filterYear(2016)}
            className="btn m-3  btn-primary"
          >
            2016
          </button>
          <button
            onClick={() => filterYear(2017)}
            className="btn m-3  btn-primary"
          >
            2017
          </button>
          <button
            onClick={() => filterYear(2018)}
            className="btn m-3  btn-primary"
          >
            2018
          </button>
          <button
            onClick={() => filterYear(2019)}
            className="btn m-3  btn-primary"
          >
            2019
          </button>
          <button
            onClick={() => filterYear(2020)}
            className="btn m-3  btn-primary"
          >
            2020
          </button>

          <hr />
          <p class="card-text fw-bold">Successfull Launch</p>
          <button
            onClick={() => setSendData({ ...sendData, success_launch: true })}
            className="btn mx-3  btn-primary"
          >
            True
          </button>
          <button
            onClick={() => setSendData({ ...sendData, success_launch: false })}
            className="btn mx-3  btn-primary"
          >
            False
          </button>

          <hr />
          <p class="card-text mt-1 fw-bold">Successfull Landing</p>
          <button
            onClick={() => setSendData({ ...sendData, success_landing: true })}
            className="btn mx-3  btn-primary"
          >
            True
          </button>
          <button
            onClick={() => setSendData({ ...sendData, success_landing: false })}
            className="btn mx-3  btn-primary"
          >
            False
          </button>
        </div>
      </div>
    </div>
  );
}
