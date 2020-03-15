import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {ButtonGroup, DropdownButton, Dropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import { userActions } from '../_actions';


export default class ProfileManagementBar extends Component {


    render() {
        const { user, users } = this.props;
        return (
            <div class = "management-bar">
            <ButtonGroup>
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
}
