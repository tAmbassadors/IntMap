import React from "react";
import { Button } from "react-bootstrap";
import "./Tour.css";

export default function Tour() {
  return (
    <div>
      <div>
        <p1>Tour</p1>
      </div>
      <div class="img-container">
        <img
          id="tour-img"
          src={`${process.env.PUBLIC_URL}/assets/tour-img/lobby.jpg`}
          alt="Tembusu Lobby"
        />
        <object id="tour-svg" className="map-overlay" type="image/svg+xml">
          placeholder image
        </object>
        <Button variant="primary" className="right-button">
          Next
        </Button>
        <Button variant="primary" className="left-button">
          Previous
        </Button>
      </div>
    </div>
  );
}
