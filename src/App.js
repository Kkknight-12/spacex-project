import "./App.css";
// import SpaceCards from "./components/SpaceCards";
import HomePage from "./pages/home/HomePage";
import SideBar from "./components/sideBarNav/SideBar";

function App() {
  return (
    <div class="container">
      {/* <div class="row">
        <div class="col-xs-12 col"> <SideBar />
        </div>
        <div class="col-xs-1 col-9 ">{" "}
        <div className="row">
          <HomePage />
        </div>
        </div>
      </div> */}
      <div class="d-flex flex-column flex-md-row mt-3 mb-3">
        <div class="d-flex flex-column p-2 bd-highlight align-items-center justify-content-sm-between">
          <SideBar />
        </div>
        <div class="p-2 bd-highlight">
          <HomePage />
        </div>
      </div>
    </div>
  );
}

export default App;
