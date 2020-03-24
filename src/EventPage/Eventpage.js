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
import {userActions} from "../_actions";
import {connect} from "react-redux";


class Eventpage extends Component {

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
                    <AddEventButton/>
                    <EventBoxes/>
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

const connectedEventPage = connect(mapState, actionCreators)(Eventpage);
export { connectedEventPage as EventPage };