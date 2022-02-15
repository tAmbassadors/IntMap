import React from "react";
import { Button, FormControl } from "react-bootstrap";
import "./Tour.css";
import Svg from "./Svg.js";

export default function Tour(props) {
  const { location, changeLocation } = props;
  console.log(location);
  return (
    <div>
      <div>
        <p1>Tour</p1>
        <p>{location}</p>
      </div>
      <div id="tour-div" class="img-container tour-div">
        <img
          id="tour-img"
          src={`${process.env.PUBLIC_URL}/assets/tour-img/${location}.jpg`}
          alt="Tembusu Lobby"
        />
        <Svg
          id="map-overlay"
          location={location}
          changeLocation={changeLocation}
        />
      </div>
    </div>
  );
}
