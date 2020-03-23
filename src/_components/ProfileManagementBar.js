import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {ButtonGroup, DropdownButton, Dropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import { userActions } from '../_actions';
import {connect} from "react-redux";


let user = JSON.parse(localStorage.getItem('user'));

export default class ProfileManagementBar extends Component {

    render() {
        if(user.userTypeId===1) {
            return (

                <div class="management-bar">
                    <div className="logo-section">Good2Meet</div>

                    <ButtonGroup>
                        <div class="name-section">Hi, {user.name} !</div>
                        <DropdownButton as={ButtonGroup} title="Profile" id="bg-nested-dropdown">
                            <Dropdown.Item href="/profile" id="dropdown-item" eventKey="1">Profile page</Dropdown.Item>
                            <Dropdown.Item id="dropdown-item" eventKey="2">
                                <Link to="/login">Logout</Link>
                            </Dropdown.Item>
                        </DropdownButton>
                    </ButtonGroup>
                </div>
            )
        }
        else if(user.userTypeId===2){
            return(
                <div class="management-bar">
                    <div className="logo-section">Good2Meet</div>

                    <ButtonGroup>
                        <div class="name-section">Hi, {user.name} !</div>
                        <DropdownButton as={ButtonGroup} title="Profile" id="bg-nested-dropdown">
                            <Dropdown.Item href="/profile" id="dropdown-item" eventKey="1">Profile page</Dropdown.Item>
                            <Dropdown.Item href="/profiles" id="dropdown-item" eventKey="1">Profiles Manager</Dropdown.Item>
                            <Dropdown.Item id="dropdown-item" eventKey="2">
                                <Link to="/login">Logout</Link>
                            </Dropdown.Item>
                        </DropdownButton>
                    </ButtonGroup>
                </div>
            )
        }
    }
}

