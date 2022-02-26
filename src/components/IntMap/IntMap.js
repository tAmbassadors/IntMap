import React, { useState, useEffect, useCallback } from "react";
import { Button, Container, FormControl, Row, Col } from "react-bootstrap";

import Map from "../Map";
import Tour from "../Tour";
import Footer from "../Footer";
import NavBar from "../NavBar";
import "./IntMap.css";

function IntMap() {
  const [location, setLocation] = useState("start-image");
  function changeLocation(place) {
    setLocation(place);
  }
  const [map, setMap] = useState("Lobby");

  function changeMap(place) {
    setMap(place);
    let mapDiv = document.getElementById("map-div");

    mapDiv.style.backgroundImage = `url(${process.env.PUBLIC_URL}/assets/${place}.png)`;
    console.log("called changeMap");
    if (String(place) === "Lobby") {
      changeLocation("lobby");
    } else if (String(place) === "Lvl3") {
      changeLocation("misty-garden");
    } else if (String(place) === "Lvl17") {
      changeLocation("corridor");
    } else if (String(place) === "Learnlobe") {
      changeLocation("learnlobe-walkway-l1");
    }
  }

  function reset() {
    changeMap("Lobby");
    changeLocation("start-image");
  }
  return (
    <>
      <NavBar />
      <Container>
        <div className="title">Tembusu College Interactive Map</div>
        <Map
          location={location}
          changeLocation={changeLocation}
          map={map}
          changeMap={changeMap}
        />
        <br />
        <Tour
          location={location}
          changeLocation={changeLocation}
          reset={reset}
        />
      </Container>
      <Footer />
    </>
  );
}

export default IntMap;
