import React, { useState, useEffect, useCallback } from "react";
import { Button } from "react-bootstrap";
import "./Map.css";
import Svg from "./Svg.js";

function Map(props) {
  const { location, changeLocation } = props;

  // map's Lobby refers to the bird eye view map of Lobby
  const [map, setMap] = useState("Lobby");

  let mapDiv = document.getElementById("map-div");
  let mapName = document.getElementById("map-name");

  // Function toggles the birds eye view map and the title of the map
  // const changeMap = useCallback(() => {
  // birdEyeViewMap.src = `${process.env.PUBLIC_URL}/assets/${location}.png`;
  // const mapSvg = `${process.env.PUBLIC_URL}/assets/${location}_clickable.svg`;
  // birdEyeViewSvg.data = mapSvg;
  // mapName.innerText = location;
  // }, [location, birdEyeViewMap, birdEyeViewSvg, mapName]);

  // useEffect(() => {
  // console.log("caled");
  // changeMap();
  // }, [changeMap]);

  function changeMap(place) {
    setMap(place);
    mapDiv.style.backgroundImage = `url(${process.env.PUBLIC_URL}/assets/${place}.png)`;
    console.log("called changeMap");
    mapName.innerText = place;
  }
  return (
    <div>
      <div id="map-name">Lobby</div>
      <div id="map-div" className="img-container bev-map-div">
        {/* inner text of <object> is alt text */}
        {/* <object
          id="bev-svg"
          className="map-overlay"
          data="/assets/Lobby_clickable.svg"
          type="image/svg+xml"
        >
          placeholder image
        </object> */}
        <Svg id="map-overlay" map={map} changeLocation={changeLocation} />
      </div>
      <div>
        <Button
          className="btn-toggle"
          variant="outline-secondary"
          onClick={() => {
            // setLocation("Lobby");
            changeMap("Lobby");
          }}
        >
          Lobby
        </Button>
        <Button
          className="btn-toggle"
          variant="outline-secondary"
          onClick={() => {
            // setLocation("Lvl3");
            changeMap("Lvl3");
          }}
        >
          Level 3
        </Button>
        <Button
          className="btn-toggle"
          variant="outline-secondary"
          onClick={() => {
            // setLocation("Lvl17");
            changeMap("Lvl17");
          }}
        >
          Level 17
        </Button>
        <Button
          className="btn-toggle"
          variant="outline-secondary"
          onClick={() => {
            // setLocation("Learnlobe");
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
