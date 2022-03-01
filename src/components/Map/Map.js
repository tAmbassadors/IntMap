import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import "./Map.css";
import Svg from "./Svg.js";

function Map(props) {
  const { changeLocation, map, changeMap } = props;

  return (
    <div className="component-container">
      <Row
        id="map-div"
        className="img-container bev-map-div justify-content-center"
      >
        <Col
          lg="6"
          xs="12"
          className="img-container-col"
          style={{
            paddingLeft: "0px",
            paddingRight: "0px",
            // border: "1px solid red",
          }}
        >
          <Svg id="map-overlay" map={map} changeLocation={changeLocation} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            className="btn-toggle"
            variant="outline-secondary"
            active={map === "Lobby"}
            onClick={() => {
              changeMap("Lobby");
            }}
          >
            Lobby
          </Button>
          <Button
            className="btn-toggle"
            variant="outline-secondary"
            active={map === "Lvl3"}
            onClick={() => {
              changeMap("Lvl3");
            }}
          >
            Level 3
          </Button>
          <Button
            className="btn-toggle"
            variant="outline-secondary"
            active={map === "Lvl17"}
            onClick={() => {
              changeMap("Lvl17");
            }}
          >
            Level 17
          </Button>
          <Button
            className="btn-toggle"
            variant="outline-secondary"
            active={map === "Learnlobe"}
            onClick={() => {
              changeMap("Learnlobe");
            }}
          >
            Learn Lobe
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Map;
