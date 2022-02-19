import React, {useEffect} from "react";
import {
    Navbar,
    Container,
    FormControl,
    Row,
    Col
} from "react-bootstrap";
import "./Footer.css";

export default function Footer() {
    return (
        <>
            <Navbar className="footer">
                <Container>
                    <p>Made by Tembusu Ambassadors</p>
                </Container>
            </Navbar>
        </>
    );
}
