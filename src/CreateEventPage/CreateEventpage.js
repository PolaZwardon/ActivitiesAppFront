import React, {Component} from 'react';
import Navbar from '../_components/navbars/NavbarComponent'
import Footer from '../_components/header.footer/Footer'
import IconsBar from "../_components/header.footer/IconsBar";
import CreateEvent from "../_components/allEventsPage/CreateEvent";


import '../css/eventBox.css';
import '../css/navbar.css';
import '../css/footer.css';
import '../css/iconsBar.css';
import '../css/createevent.css';
import {userActions} from "../_actions";
import {connect} from "react-redux";
import ProfileManagementBar from "../_components/navbars/ProfileManagementBar";

class CreateEventpage extends Component {
    render()
    {
        return (
            <div id="page">
                <div id="container-wrap">
                    <ProfileManagementBar/>
                    <IconsBar/>
                    <Navbar/>
                    <CreateEvent/>
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

const connectedCreateEventPage = connect(mapState, actionCreators)(CreateEventpage);
export { connectedCreateEventPage as CreateEventpage };;
