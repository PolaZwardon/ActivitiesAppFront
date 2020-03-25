import React from 'react';
import { connect } from 'react-redux';
import { Button, Card } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'


import { userActions } from '../_actions';
import ProfileManagementBar from "../_components/ProfileManagementBar";
import IconsBar from "../_components/IconsBar";
import NavbarComponent from "../_components/NavbarComponent";
import Footer from "../_components/Footer";
import '../css/home.css';
import '../css/navbar.css';
import '../css/footer.css';

const community1 = require('../img/join.png').default;
const community2 = require('../img/multicultural1.png').default;
const community3 = require('../img/multicultural2.png').default;

class HomePage extends React.Component {

    render() {

        return (

            <div class="page">
                <ProfileManagementBar/>
                <IconsBar/>
                <NavbarComponent/>
                <Card.Header class="homePage-header">
                    <h2>Let's get to know each other!</h2>
                </Card.Header>
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
                <div>
                    <Card className="contact-container">

                        <Card.Body class="about-body">
                            <Card.Header class="homePage-section-header">
                                <h2>About</h2>
                            </Card.Header>
                            <Card.Subtitle class="section-information">
                                <p>&emsp;Good2Meet is a place where you can find others to spend time with and share experiences. If you and your football team is looking for eleventh player just... </p>
                            </Card.Subtitle>
                            <Card.Header class="homePage-section-header">
                                <h2>Create an event</h2>
                            </Card.Header>
                            <Card.Subtitle class="section-information">
                                <p>&emsp;Go to event page, click "Add Event", write a short description, choose time, place, how many people you are looking for and create your event! Just like that!</p>
                                <p>&emsp;You can also choose one of categories to help others find your event. Write us if you are unable to find matching category, we are open to changes!</p>
                                <p>&emsp;After someone joins your event, we will let you know via email and send you emails to your all event participants. This way you will be able to discuss more details.</p>


                            </Card.Subtitle>
                            <Card.Header class="homePage-section-header">
                                <h2>Join the event</h2>
                            </Card.Header>
                            <Card.Subtitle class="section-information">
                                <p>&emsp;If you are new in town, want to learn something new or just don't know what to do with your free time, check others events.</p>
                                <p>&emsp;You don't have to take the initiative, just learn new skills from someone else, maybe you will discover your life passion!</p>
                                <p>&emsp;After joining an event, we will send you an email to the event creator. This way you will be able to discuss more details.</p>


                            </Card.Subtitle>
                            <Card.Header class="homePage-section-header">
                                <h2>Have fun!</h2>
                                <hr width="40%"/>
                            </Card.Header>

                        </Card.Body>
                        <Card.Footer className="text-mute" class="about-footer">-</Card.Footer>
                    </Card>
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