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
import InformationBar from "../_components/header.footer/InformationBar";


class ProfilePage extends React.Component {
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

            <div class="home-card">
                <ProfileManagementBar/>
                <IconsBar/>
                <NavbarComponent/>
                <InformationBar/>
                <Card className="home-container">
                    <Card.Header class="home-header">
                        <h2>Edit your profile</h2>
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
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(ProfilePage);
export { connectedHomePage as ProfilePage };