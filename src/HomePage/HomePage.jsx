import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Card } from 'react-bootstrap';
import Form from 'react-jsonschema-form';
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'


import { userActions } from '../_actions';
import ProfileManagementBar from "../_components/ProfileManagementBar";
import IconsBar from "../_components/IconsBar";
import NavbarComponent from "../_components/NavbarComponent";
import AddEventButton from "../_components/AddEventButton";
import EventBoxes from "../_components/EventBoxes";
import Footer from "../_components/Footer";
import '../css/home.css';
import ChangeUserNameForm from "../_components/ChangeUserNameForm";

const community1 = require('../img/join.png').default;
const community2 = require('../img/multicultural1.png').default;
const community3 = require('../img/multicultural2.png').default;





class HomePage extends React.Component {

    render() {

        return (

            <div class="home">
                <ProfileManagementBar/>
                <IconsBar/>
                <NavbarComponent/>
                <div class="home-carousel">
                <Carousel>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={community3}
                            alt="First slide"


                        />
                        <Carousel.Caption>
                            <h3>Share your passions with others!</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={community2}
                            alt="First slide"


                        />
                        <Carousel.Caption>
                            <h3>Meet new friends and gain experiences!</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100"
                            src={community1}
                            alt="First slide"


                        />

                    </Carousel.Item>

                </Carousel>
                </div>

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
};

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };