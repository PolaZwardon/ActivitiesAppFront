import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Image, Col } from 'react-bootstrap';

const coffee = require('../../img/006-coffee.png').default;
const charity = require('../../img/008-charity-3.png').default;
const fastfood = require('../../img/024-fast-food.png').default;
const animals = require('../../img/033-animals.png').default;
const ball = require('../../img/044-ball.png').default;
const backpack = require('../../img/026-backpack.png').default;
const award = require('../../img/030-award.png').default;
const cocktail = require('../../img/003-cocktail.png').default;

export default class IconsBar extends Component {

    render() {
        return (

            <Container class="icons-container" id="icons">
                <link href="https://fonts.googleapis.com/css?family=Lobster|Krub&display=swap" rel="stylesheet"/>
                <Row>
                    <Col xs={6} md={1}>
                        <Image className="img-responsive" src={award} alt={"award"} width='70px' height='70px' />
                    </Col>
                    <Col xs={6} md={1}>
                        <Image className="img-responsive" src={coffee} alt={"coffee"} width='70px' height='70px'/>
                    </Col>
                    <Col xs={6} md={1}>
                        <Image className="img-responsive" src={charity} alt={"charity"} width='70px' height='70px'/>
                    </Col>
                    <Col xs={6} md={1}>
                        <Image className="img-responsive" src={fastfood} alt={"fastfood"} width='70px' height='70px'/>
                    </Col>
                    <Col md={4}>
                        <div className="header-container">
                        <h1>Good2Meet</h1>
                        </div>
                    </Col>
                    <Col xs={6} md={1}>
                        <Image className="img-responsive" src={cocktail} alt={"cocktail"} width='70px' height='70px'/>
                    </Col>
                    <Col xs={6} md={1}>
                        <Image className="img-responsive" src={animals} alt={"animals"} width='70px' height='70px'/>
                    </Col>
                    <Col xs={6} md={1}>
                        <Image className="img-responsive" src={ball} alt={"ball"} width='70px' height='70px'/>
                    </Col>
                    <Col xs={6} md={1}>
                        <Image className="img-responsive" src={backpack} alt={"backpack"} width='70px' height='70px'/>
                    </Col>
                </Row>
            </Container>
        )
    }
}