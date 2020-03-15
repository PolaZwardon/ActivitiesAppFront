import React, {Component} from 'react';
import Navbar from '../_components/NavbarComponent'
import Footer from '../_components/Footer'
import IconsBar from "../_components/IconsBar";
import CreateEvent from "../_components/CreateEvent";


import '../css/eventBox.css';
import '../css/navbar.css';
import '../css/footer.css';
import '../css/iconsBar.css';
import '../css/createevent.css';
import {userActions} from "../_actions";
import {connect} from "react-redux";
import ProfileManagementBar from "../_components/ProfileManagementBar";

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
