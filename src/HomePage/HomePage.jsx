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
import ChangeUserNameForm from "../_components/ChangeUserNameForm";


class HomePage extends React.Component {
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
                                <Link id="profile-logout-button" to="/login">Logout</Link>

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

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };