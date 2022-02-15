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
      <div class="img-container">
        <img
          id="tour-img"
          src={`${process.env.PUBLIC_URL}/assets/tour-img/${location}.jpg`}
          alt="Tembusu Lobby"
        />
        <object id="tour-svg" className="map-overlay" type="image/svg+xml">
          placeholder image
        </object>
        {/* <Button variant="primary" className="right-button">
          Next
        </Button>
        <Button variant="primary" className="left-button" onClick>
          Previous
        </Button> */}
        <Svg
          id="map-overlay"
          location={location}
          changeLocation={changeLocation}
        />
      </div>
    </div>
  );
}
