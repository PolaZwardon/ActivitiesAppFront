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

            <div class="home-card">
                <ProfileManagementBar/>
                <IconsBar/>
                <NavbarComponent/>
                <MyEvent/>
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

const connectedMyEventsPage = connect(mapState, actionCreators)(MyEventsPage);
export { connectedMyEventsPage as MyEventsPage };