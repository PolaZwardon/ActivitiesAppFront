import React, {Component} from 'react';
import NavbarComponent from '../_components/navbars/NavbarComponent'
import Contact from '../_components/contactPage/Contact'
import Footer from "../_components/header.footer/Footer";
import IconsBar from "../_components/header.footer/IconsBar";


import '../css/contact.css';
import '../css/navbar.css';
import '../css/footer.css';
import {userActions} from "../_actions";
import {connect} from "react-redux";
import ProfileManagementBar from "../_components/navbars/ProfileManagementBar";
import InformationBar from "../_components/header.footer/InformationBar";

class Contactpage extends Component {
    render()
    {
        return (

            <div id="page">
                <div id="container-wrap">
                    <ProfileManagementBar/>
                    <IconsBar/>
                    <NavbarComponent/>
                    <InformationBar/>
                    <Contact/>
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

const connectedContactPage = connect(mapState, actionCreators)(Contactpage);
export { connectedContactPage as ContactPage };