import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Card } from 'react-bootstrap';
import Form from 'react-jsonschema-form';



import { userActions } from '../_actions';
import ProfileManagementBar from "../_components/ProfileManagementBar";
import IconsBar from "../_components/IconsBar";
import NavbarComponent from "../_components/NavbarComponent";
import AddEventButton from "../_components/AddEventButton";
import EventBoxes from "../_components/EventBoxes";
import Footer from "../_components/Footer";
import '../css/home.css';
import '../css/profile.css';

import ChangeUserNameForm from "../_components/ChangeUserNameForm";
import {usersEventsService} from "../_services/userEvents.service";
import UserEventList from "../_components/UserEventList";

let user = JSON.parse(localStorage.getItem('user'));

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
    };
/*        componentDidMount() {
            this.props.getEvents(user.userId);
        }*/


    /*    handleDeleteUser(id) {
            return (e) => this.props.deleteUser(id);
        }*/


    render() {
        const { user, users } = this.props;
        return (

            <div class="home-card">
                <ProfileManagementBar/>
                <IconsBar/>
                <NavbarComponent/>
                <Card className="home-container">
                    <Card.Header class="home-header">
                        <h2>Edit your profile</h2>
                        <h2>{this.props.usersEventsId}</h2>
                    </Card.Header>
                    <Card.Body class="contact-body">
                        <Card.Subtitle class="home-information">
                            <ul>
                                <h1>{user.name}</h1>
                                <div>
                                    <ChangeUserNameForm/>

                                </div>
                                <h1>{user.email}</h1>
                            </ul>
                            <div class="button-container">
                                <Button id="profile-logout-button" href="/login">Logout</Button>

                            </div>

                        </Card.Subtitle>

                    </Card.Body>
                    <Card.Footer className="text-mute" class="contact-footer">-</Card.Footer>
                </Card>

                {/*                <p>You're logged in with React!!</p>
                <h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                            <li key={user.id}>
                                {user.firstName + ' ' + user.lastName}
                                {
                                    user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                    : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                }
                            </li>
                        )}
                    </ul>
                }*/}

                <Footer/>
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
/*    getEvents: usersEventsService.getEventsByParticipantId(),
    getParticipants: usersEventsService.getParticipantsByEventId()*/
}

const connectedHomePage = connect(mapState, actionCreators)(ProfilePage);
export { connectedHomePage as ProfilePage };