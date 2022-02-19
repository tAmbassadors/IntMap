import React, {useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import "./Tour.css";
import Svg from "./Svg.js";
import {roomNames, roomDescriptions} from "./Description.js";

export default function Tour(props) {
    const {location, changeLocation} = props;
    console.log(location);

    useEffect(() => {
        let tourDiv = document.getElementById("tour-div");
        let tourName = document.getElementById("location-name");
        let tourDesc = document.getElementById("location-description");
        tourDiv.style.backgroundImage = `url(${
            process.env.PUBLIC_URL
        }/assets/tour-img/${location}.JPG)`;
        if (roomNames[location]) {
            tourName.innerText = roomNames[location];
        } else {
            tourName.innerText = "Tembusu College";
        }
        if (roomDescriptions[location]) {
            tourDesc.innerText = roomDescriptions[location];
        } else {
            tourDesc.innerText = "Welcome to Tembusu College!";
        }
    }, [location]);

    return (
        <Container className="tour-container">
            <Row>
                <Col lg="8">
                    <div id="tour-div" className="img-container tour-div">
                        <Svg id="map-overlay"
                            location={location}
                            changeLocation={changeLocation}/>
                    </div>
                </Col>
                <Col className="description-container">
                    <p id="location-name">lobby</p>
                    <p id="location-description">
                        This is the main lobby of the Residential Building, where Tembusians often meet up before heading off for meals, lessons or other activities!
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
