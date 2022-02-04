import React from "react";
// import test from "../../assets/yellow-box.svg";
import { Button } from "react-bootstrap";
import "./Map.css";

function Map() {
  let birdEyeViewMap = document.getElementById("bird-eye-view-map");
  let mapName = document.getElementById("map-name");
  // let svgMap = document.createElement("IMG");
  // svgMap.type = "image/svg+xml";
  // let bevMap = document.getElementById("bev-map");
  // bevMap.appendChild(svgMap);
  // const svgData = "../../assets/yellow-box.svg";
  // svgMap.data = svgData;

  //Function toggles the birds eye view map and the title of the map
  function changeMap(location) {
    birdEyeViewMap.src = `${process.env.PUBLIC_URL}/assets/${location}.png`;
    mapName.innerText = location;
  }
  return (
    <div>
      <div id="map-name">Lobby</div>
      <div className="img-container" style={{ border: "1px solid blue" }}>
        <img
          id="bird-eye-view-map"
          src={process.env.PUBLIC_URL + "/assets/Lobby.png"}
          alt="Tembusu Lobby"
          className="map-background"
        />
        {/* inner text of <object> is alt text */}
        <object
          className="map-overlay"
          data="/assets/Lobby_clickable.svg"
          type="image/svg+xml"
        >
          placeholder image
        </object>
      </div>
      <div>
        <Button
          className="btn-toggle"
          variant="outline-secondary"
          onClick={() => {
            changeMap("Lobby");
          }}
        >
          Lobby
        </Button>
        <Button
          className="btn-toggle"
          variant="outline-secondary"
          onClick={() => {
            changeMap("Lvl3");
          }}
        >
          Level 3
        </Button>
        <Button
          className="btn-toggle"
          variant="outline-secondary"
          onClick={() => {
            changeMap("Lvl17");
          }}
        >
          Level 17
        </Button>
        <Button
          className="btn-toggle"
          variant="outline-secondary"
          onClick={() => {
            changeMap("Learnlobe");
          }}
        >
          Learn Lobe
        </Button>
      </div>
    </div>
  );
}

export default Map;
