import "./App.css";
import {useState} from 'react';
function App() {
  let [togBtn, setTogBtn] = useState(false); 
  return (
    <div className="App">
      {/* HEADER */}
      <div className="sticky" id="sticky">
        <h1>1 noon auction</h1>
        <i className="bx bx-menu " id="toggleBtn"></i>
      </div>

      {/* SIDEMENU */}
      <div className="sidemenu" id="sidemenu">
        <div className="side-bg"></div>
        <div className="container-sideHeader">
          <h1>1 noon auction</h1>
          <i className="bx bx-arrow-back"></i>
        </div>

        <div className="container-icons">
          <div className="side-icons">
            <div className="icon-frame">
              <i className="bx bx-home-alt-2"></i>
              <p>Home</p>
            </div>

            <div className="icon-frame">
              <i className="bx bxs-layer-plus"></i>
              <p>New</p>
            </div>

            <div className="icon-frame">
              <i className="bx bxs-map-pin"></i>
              <p>Location</p>
            </div>

            <div className="icon-frame">
              <i className="bx bxs-calendar"></i>
              <p>Date</p>
            </div>

            <div className="icon-frame">
              <i className="bx bxs-map-pin"></i>
              <p>Price</p>
            </div>

            <div className="icon-frame">
              <i className="bx bxs-map-pin"></i>
              <p>Category</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
