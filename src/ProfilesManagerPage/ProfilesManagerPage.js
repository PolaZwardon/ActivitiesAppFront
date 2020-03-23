import React, {Component} from 'react';
import NavbarComponent from '../_components/NavbarComponent'
import EventBoxes from '../_components/EventBoxes'
import Footer from '../_components/Footer'
import IconsBar from "../_components/IconsBar";
import AddEventButton from "../_components/AddEventButton";
import ProfileManagementBar from "../_components/ProfileManagementBar";

import '../css/eventBox.css';
import '../css/navbar.css';
import '../css/footer.css';
import '../css/iconsBar.css';
import '../css/profileManager.css';

import {userActions} from "../_actions";
import {connect} from "react-redux";
import ProfilesManager from "../_components/ProfilesManager";
import {Card} from "react-bootstrap";
import Profiles from "../_components/Profiles";
import Table from "react-bootstrap/Table";


class ProfilesManagerPage extends Component {

    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }
    render()
    {
        return (
            <div id="page">
                <div id="container-wrap">
                    <ProfileManagementBar/>
                    <IconsBar/>
                    <NavbarComponent/>
                    <div className="contact-card">
                        <Card className="contact-container">

                            <Card.Header class="contact-header">
                                <h2>Profiles Manager </h2>
                            </Card.Header>
                        </Card>
                    </div>
                        <Card className="profile-card">
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>User Id</th>
                                    <th>Username</th>
                                    <th>E-mail</th>
                                    <th>Edit</th>
                                </tr>
                                </thead>
                                   <Profiles/>
                            </Table>
                        </Card>
                    <Footer/>
                </div>
            </div>



        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedProfilesManagerPage = connect(mapState, actionCreators)(ProfilesManagerPage);
export { connectedProfilesManagerPage as ProfilesManagerPage };