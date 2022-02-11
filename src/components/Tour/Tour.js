import React from "react";
import { Button } from "react-bootstrap";
import "./Tour.css";

export default function Tour() {
  return (
    <div>
      <div style={{ border: "5px solid red" }}>
        <p1>Tour (not implemented yet)</p1>
      </div>
      <div class="img-container">
        <img
          src={`${process.env.PUBLIC_URL}/assets/tour_placeholder.jpg`}
          alt="Tembusu Lobby"
        />

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
