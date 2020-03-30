import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Card } from 'react-bootstrap';
import Form from 'react-jsonschema-form';



import { userActions } from '../_actions';
import ProfileManagementBar from "../_components/navbars/ProfileManagementBar";
import IconsBar from "../_components/header.footer/IconsBar";
import NavbarComponent from "../_components/navbars/NavbarComponent";
import AddEventButton from "../_components/allEventsPage/AddEventButton";
import EventBoxes from "../_components/allEventsPage/EventBoxes";
import Footer from "../_components/header.footer/Footer";
import '../css/home.css';
import '../css/profile.css';

import ChangeUserNameForm from "../_components/profilePage/ChangeUserNameForm";
import MyEvent from "../_components/myEventsAsParticipant/myEvent";
import Table from "react-bootstrap/Table";
import Profiles from "../_components/profilesManager/Profiles";


class MyEventsPage extends React.Component {
    /*
        componentDidMount() {
            this.props.getUsers();
        }
    */

    /*    handleDeleteUser(id) {
            return (e) => this.props.deleteUser(id);
        }*/


    render() {
        const { user, users } = this.props;
        return (

            <div id="page">
                <div id="container-wrap">
                    <ProfileManagementBar/>
                    <IconsBar/>
                    <NavbarComponent/>
                    <div className="contact-card">
                        <Card className="contact-container">

                            <Card.Header class="contact-header">
                                <h2>Joined Events</h2>
                            </Card.Header>
                        </Card>
                    </div>
                    <Card className="profile-card">
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Place</th>
                                <th>Date</th>
                                <th>Current</th>
                                <th>Max</th>
                                <th> </th>

                            </tr>
                            </thead>
                            <MyEvent/>
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

const connectedMyEventsPage = connect(mapState, actionCreators)(MyEventsPage);
export { connectedMyEventsPage as MyEventsPage };