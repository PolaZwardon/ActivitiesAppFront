import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Col } from 'react-bootstrap';
import Container from "react-bootstrap/Container";



export default class NavbarComponent extends Component {


    render() {
        return (

            <div>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                      crossOrigin="anonymous">
                </link>

                <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
                        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
                        crossOrigin="anonymous"/>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
                        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
                        crossOrigin="anonymous"/>

                <link href="https://fonts.googleapis.com/css?family=Lobster|Krub&display=swap" rel="stylesheet"/>


                <Navbar className="color-nav" variant="light" expand="lg"  >
                    <Col xs={4} md={3}>
                        <Navbar.Brand href="#home"><a>Menu</a></Navbar.Brand>
                    </Col>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Col xs={3} md={10}>
                                    <Nav.Link  href="/"><a>Home</a></Nav.Link>
                                </Col>
                                <Col xs={3} md={10}>
                                    <Nav.Link href="/events"><a>Event</a></Nav.Link>
                                </Col>
                                <Col xs={3} md={10}>
                                    <Nav.Link href="/contact"><a>Contact</a></Nav.Link>
                                </Col>
                            </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}