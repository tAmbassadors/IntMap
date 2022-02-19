import React from "react";
import {Button, Navbar, Container} from "react-bootstrap";
import "./NavBar.css";

export default function NavBar() {
    return (
        <Navbar style={
            {backgroundColor: "white"}
        }>
            <Container>
                <Navbar.Brand href="#home">
                    <img alt=""
                        src={
                            `${
                                process.env.PUBLIC_URL
                            }/assets/College_logo.png`
                        }
                        className="d-inline-block navbar-logo"/>
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <Button variant="outline-success" className="navbar-button" href="https://tembusu.nus.edu.sg/" target="_blank">
                        Visit College Website
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
