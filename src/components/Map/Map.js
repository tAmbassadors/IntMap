import React from "react";
// import test from "/img/test.svg";
// import lobbyImg from "../../../public/img/Lobby.png";
import { Button } from "react-bootstrap";

function Map() {
  let birdEyeViewMap = document.getElementById("bird-eye-view-map");
  let mapName = document.getElementById("map-name");

  function changeMap(location) {
    birdEyeViewMap.src = require(`../../assets/${location}.png`);
    mapName.innerText = location;
  }
  return (
    <div
      style={{
        border: "5px outset red",
        // backgroundImage: `url(require("../../assets/Lobby.png"))`,
      }}
    >
      <div>
        <div id="map-name">Lobby</div>
        <img
          id="bird-eye-view-map"
          src={require("../../assets/Lobby.png")}
          alt="Tembusu Lobby"
          width="50%"
        />
      </div>

      <Button
        onClick={() => {
          changeMap("Lobby");
        }}
      >
        Lobby
      </Button>
      <Button
        onClick={() => {
          changeMap("Lvl3");
        }}
      >
        Level 3
      </Button>
      <Button
        onClick={() => {
          changeMap("Lvl17");
        }}
      >
        Level 17
      </Button>
      <Button
        onClick={() => {
          changeMap("Learnlobe");
        }}
      >
        Learn Lobe
      </Button>

      {/* <img
        id="map"
        src={process.env.PUBLIC_URL + "/img/Lobby_clickable.svg"}
        alt="Tembusu Lobby Clickable"
        width="50%"
        style={{ position: "absolute", left: 0, width: "100%" }}
      /> */}
    </div>
  );
}

export default Map;
