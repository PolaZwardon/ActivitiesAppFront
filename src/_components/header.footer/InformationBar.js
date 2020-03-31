import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {ButtonGroup, DropdownButton, Dropdown, Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import { userActions } from '../../_actions';
import {connect} from "react-redux";


let user = JSON.parse(localStorage.getItem('user'));
const virus = require('../../img/coronavirus.png').default;

export default class InformationBar extends Component {

    render() {
            return (

                <div className="information-bar">
                    <div className="logo-information-bar">
                        <div class="img-info-bar">
                            <Image  className="img-responsive" src={virus} alt={"award"} align='left' width='40px' height='40px'/>
                        </div>
                        <h3>COVID-19</h3>
                        <p>Due to the pandemic, to help keep you and others safe, please use our website wisely and meet online. #StayAtHome</p>
                        <div class="button-information-bar">
                        <ButtonGroup>
                        <DropdownButton  title="Useful links" id="bg-nested-dropdown">
                            <Dropdown.Item href="https://www.gov.pl/web/coronavirus" eventKey="1">Information and recommendations PL</Dropdown.Item>
                        </DropdownButton>
                        </ButtonGroup>
                        </div>
                    </div>

                </div>
            )

    }
}

