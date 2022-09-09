import React from "react";

const GridLA = () => {
  return (
    <>
      <div className="container p-2">
        <div className="row flex text-center gap-3 mb-3 md:flex-wrap">
          <div className="p-3 bg-bluegray-900 flex-1 text-blue-600 sm:flex-none">
            column
          </div>
          <div className="p-3 bg-bluegray-900 flex-1  text-blue-600 sm:flex-none">
            column
          </div>
          <div className="p-3 bg-bluegray-900 flex-1 text-blue-600  sm:flex-none">
            column
          </div>
        </div>
        <div className="row flex text-center gap-3 mb-3 md:flex-wrap">
          <div className="p-3 bg-bluegray-900 flex-1 text-blue-600 md:text-blue-900  md:flex-1">
            column
          </div>
          <div className="p-3 bg-bluegray-900 flex-1  text-blue-600  md:flex-1">
            column
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-container indigo-container overflow-hidden">
          <div className="flex">
            <div className="flex-1 md:flex-none flex align-items-center justify-content-center bg-indigo-500 font-bold text-white m-2 px-5 py-3 border-round">
              flex-1 on small devices and none on bigger.
            </div>
            <div className="flex-1 md:flex-none flex align-items-center justify-content-center bg-indigo-500 font-bold text-white m-2 px-5 py-3 border-round">
              flex-1 on small devices and none on bigger.
            </div>
          </div>
        </div>
      </div>

      {/* <div className="card">
        <div className="flex  md:flex-wrap card-container green-container">
          <div
            className="flex flex-1 align-items-center justify-content-center bg-green-500 font-bold text-white m-2 border-round"
            style={{ minHeight: "100px" }}
          >
            1
          </div>
          <div
            className="flex flex-1 align-items-center justify-content-center bg-green-500 font-bold text-white m-2 border-round"
            style={{ minHeight: "100px" }}
          >
            2
          </div>
          <div
            className="flex flex-1 align-items-center justify-content-center bg-purple-500 font-bold text-white m-2 border-round"
            style={{ minHeight: "100px" }}
          >
            3
          </div>
        </div>
      </div> */}

      {/* <div class="grid grid-nogutter p-2 text-center">
        <div class="col-12  bg-purple-500 m-2">A</div>
        <div class="col-12 md:col-6 lg:col-3 bg-purple-500 m-2">B</div>
        <div class="col-12 md:col-6 lg:col-3 bg-purple-500 m-2">C</div>
        <div class="col-12 md:col-6 lg:col-3 bg-purple-500 m-2">D</div>
          </div> */}

      {/* <div class="grid">
    <div class="col-6 bg-purple-500">6</div>
    <div class="col-6 bg-purple-500">6</div>
    <div class="col-6 bg-purple-500">6</div>
    <div class="col-6 bg-purple-500">6</div>
</div> */}

      <div class="card">
        <h5>Vertical and Grid</h5>
        <div className="formgrid  grid p-fluid">
          <div className="field  col md:col-12 ">
            {/* <label for="firstname2">Firstname</label>
            <input
              id="firstname2"
              type="text"
              className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            /> */}
            <span className="p-float-label">
              <input id="inputtext"  className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
              <label htmlFor="inputtext">InputText</label>
            </span>
          </div>
          <div className="field  col md:col-12">
            <label for="lastname2">Lastname</label>
            <input
              id="lastname2"
              type="text"
              className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GridLA;
