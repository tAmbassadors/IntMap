import React, {useState, useEffect, useCallback} from "react";
import {Button, Row, Col} from "react-bootstrap";
import "./Map.css";
import Svg from "./Svg.js";

function Map(props) {
    const {location, changeLocation} = props;

    // map's Lobby refers to the bird eye view map of Lobby
    const [map, setMap] = useState("Lobby");
    // let mapDiv = document.getElementById("map-div");
    // let mapName = document.getElementById("map-name");

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
        let mapDiv = document.getElementById("map-div");
        let mapName = document.getElementById("map-name");

        mapDiv.style.backgroundImage = `url(${
            process.env.PUBLIC_URL
        }/assets/${place}.png)`;
        console.log("called changeMap");
        mapName.innerText = place;
    }
    return (
        <div className="component-container">
            <Row id="map-name" className="justify-content-center">Lobby</Row>
            <Row id="map-div" className="img-container bev-map-div justify-content-center">
                <Col lg="6">
                    <Svg id="map-overlay"
                        map={map}
                        changeLocation={changeLocation}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button className="btn-toggle" variant="outline-secondary"
                        onClick={
                            () => {
                                changeMap("Lobby");
                            }
                    }>
                        Lobby
                    </Button>
                    <Button className="btn-toggle" variant="outline-secondary"
                        onClick={
                            () => {
                                changeMap("Lvl3");
                            }
                    }>
                        Level 3
                    </Button>
                    <Button className="btn-toggle" variant="outline-secondary"
                        onClick={
                            () => {
                                changeMap("Lvl17");
                            }
                    }>
                        Level 17
                    </Button>
                    <Button className="btn-toggle" variant="outline-secondary"
                        onClick={
                            () => {
                                changeMap("Learnlobe");
                            }
                    }>
                        Learn Lobe
                    </Button>
                </Col>
            </Row>
        </div>
    );
}

export default Map;
