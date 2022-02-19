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

function IntMap() {
    const [location, setLocation] = useState("lobby");
    function changeLocation(place) {
        setLocation(place);
    }
    return (
        <Container>
            <div>Tembusu College Virtual Tour</div>
            <Map location={location}
                changeLocation={changeLocation}/>
            <Tour location={location}
                changeLocation={changeLocation}/>
            <Footer/>
        </Container>
    );
}

export default IntMap;
