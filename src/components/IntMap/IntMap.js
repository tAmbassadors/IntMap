import React, {useState, useEffect, useCallback} from "react";
import {
    Button,
    Container,
    FormControl,
    Row,
    Col
} from "react-bootstrap";

import Map from "../Map";
import Tour from "../Tour";
import Footer from "../Footer"
import NavBar from "../NavBar"
import "./IntMap.css";

function IntMap() {
    const [location, setLocation] = useState("lobby");
    function changeLocation(place) {
        setLocation(place);
    }
    return (
        <>
            <NavBar/>
            <Container>
                <br/>
                <div className="title">Tembusu College Interactive Map</div>
                <Map location={location}
                    changeLocation={changeLocation}/>
                <br/>
                <Tour location={location}
                    changeLocation={changeLocation}/>
                <Footer/>
            </Container>

        </>
    );
}

export default IntMap;
