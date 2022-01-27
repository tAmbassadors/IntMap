import React from "react";

function Map() {
  return (
    <div style={{ border: "5px outset red" }}>
      <img
        id="map"
        src={require("../../img/Lobby.png")}
        alt="Tembusu Lobby"
        width="50%"
      />
    </div>
  );
}

export default Map;
