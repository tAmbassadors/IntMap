import React, { useState, useEffect, useCallback } from "react";
import { Button } from "react-bootstrap";
import "./Map.css";

function Map() {
  const [location, setLocation] = useState("");
  let birdEyeViewMap = document.getElementById("bev-map");
  let mapName = document.getElementById("map-name");
  let birdEyeViewSvg = document.getElementById("bev-svg");
  // let svgMap = document.createElement("IMG");
  // svgMap.type = "image/svg+xml";
  // let bevMap = document.getElementById("bev-map");
  // bevMap.appendChild(svgMap);
  // const svgData = "../../assets/yellow-box.svg";
  // svgMap.data = svgData;

  //Function toggles the birds eye view map and the title of the map
  const changeMap = useCallback(() => {
    birdEyeViewMap.src = `${process.env.PUBLIC_URL}/assets/${location}.png`;
    const mapSvg = `${process.env.PUBLIC_URL}/assets/${location}_clickable.svg`;
    birdEyeViewSvg.data = mapSvg;
    mapName.innerText = location;
  }, [location, birdEyeViewMap, birdEyeViewSvg, mapName]);

  useEffect(() => {
    console.log("caled");
    changeMap();
  }, [changeMap]);

  return (
    <div>
      <div id="map-name">Lobby</div>
      <div className="img-container">
        <img
          id="bev-map"
          src={process.env.PUBLIC_URL + "/assets/Lobby.png"}
          alt="Tembusu Lobby"
          className="map-background"
        />
        {/* inner text of <object> is alt text */}
        <object
          id="bev-svg"
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
            setLocation("Lobby");
          }}
        >
          Lobby
        </Button>
        <Button
          className="btn-toggle"
          variant="outline-secondary"
          onClick={() => {
            setLocation("Lvl3");
          }}
        >
          Level 3
        </Button>
        <Button
          className="btn-toggle"
          variant="outline-secondary"
          onClick={() => {
            setLocation("Lvl17");
          }}
        >
          Level 17
        </Button>
        <Button
          className="btn-toggle"
          variant="outline-secondary"
          onClick={() => {
            setLocation("Learnlobe");
          }}
        >
          Learn Lobe
        </Button>
      </div>
    </div>
  );
}

export default Map;
