import React, { useEffect } from "react";
import { Button, FormControl } from "react-bootstrap";
import "./Tour.css";
import Svg from "./Svg.js";
import { roomNames, roomDescriptions } from "./Description.js";

export default function Tour(props) {
  const { location, changeLocation } = props;
  console.log(location);

  useEffect(() => {
    let tourDiv = document.getElementById("tour-div");
    let tourName = document.getElementById("location-name");
    let tourDesc = document.getElementById("location-description");
    tourDiv.style.backgroundImage = `url(${process.env.PUBLIC_URL}/assets/tour-img/${location}.JPG)`;
    if (roomNames[location]) {
      tourName.innerText = roomNames[location];
    } else {
      tourName.innerText = "Tembusu College";
    }
    if (roomDescriptions[location]) {
      tourDesc.innerText = roomDescriptions[location];
    } else {
      tourDesc.innerText = "placeholder";
    }
  }, [location]);

  return (
    <div>
      <div>
        <p1>Tour</p1>
      </div>
      <div
        // className="justiry-content-center"
        style={{ border: "1px solid red" }}
      >
        <div
          id="tour-div"
          className="img-container tour-div"
          style={{ border: "1px solid red" }}
          // class="col-sm-8"
        >
          {/* <img
          id="tour-img"
          src={`${process.env.PUBLIC_URL}/assets/tour-img/${location}.jpg`}
          alt="Tembusu Lobby"
        /> */}
          <Svg
            id="map-overlay"
            location={location}
            changeLocation={changeLocation}
          />
        </div>
        <div>
          <p id="location-name">{roomNames["learnlobe-walkway-l1-2"]}</p>
          <p id="location-description">
            This is the main lobby of the Residential Building, where Tembusians
            often meet up before heading off for meals, lessons or other
            activities!
          </p>
        </div>
      </div>
    </div>
  );
}
