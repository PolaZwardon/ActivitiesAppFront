import React, { Component } from 'react'
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import {eventActions} from "../_actions/event.actions";
import {connect} from "react-redux";
let user = JSON.parse(localStorage.getItem('user'));

export default class EventCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            categoryList: [],
            category: ""
        };
        this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
    }
    componentDidMount() {
        axios.get(`http://localhost:4321/api/Category/${this.props.categoryId}`)
            .then(res => {
                const category = res.data;
                this.setState({category: category});
            });
    }
    handleDeleteEvent(id) {
        return (e) => this.props.deleteEvent(id);
    }

    render() {
        if (user.userTypeId === 1) {

        return (

        <div className="cards">
            <Card className="text-center">

                <Card.Header class="box-header" id={`cat${this.state.category.categoryName}`}>{this.props.eventName}</Card.Header>
                    <Card.Body class="card-body">
                        <Card.Title id="card-category">{this.state.category.categoryName} </Card.Title>
                        <Card.Subtitle id="card-participants"> Places taken: {this.props.currentParticipants}/{this.props.maxParticipants} </Card.Subtitle>
                        <Card.Text>
                            Description: <br/>
                            {this.props.eventDescription}
                        </Card.Text>
                        <Card.Text>
                            {this.props.eventPlace}
                        </Card.Text>
                        <Button id="join-button" variant="primary" style={{background: "#8fa0ad", border: "#8fa0ad"}}>Join</Button>
                    </Card.Body>
                    <Card.Footer className="text-mute" class="eventbox-footer">{this.props.eventDate}</Card.Footer>
                </Card>
            </div>
        )
    }
        else if(user.userTypeId===2){
            return (

                <div className="cards">
                    <Card className="text-center">

                        <Card.Header class="box-header" id={`cat${this.state.category.categoryName}`}>{this.props.eventName}</Card.Header>
                        <Card.Body class="card-body">
                            <Card.Title id="card-category">{this.state.category.categoryName} </Card.Title>
                            <Card.Subtitle id="card-participants"> Places taken: {this.props.currentParticipants}/{this.props.maxParticipants} </Card.Subtitle>
                            <Card.Text>
                                Description: <br/>

                                {this.props.eventDescription}
                            </Card.Text>
                            <Card.Text>
                            {this.props.eventPlace}
                            </Card.Text>
                            <Card.Text>
                                {this.props.eventId}aaaa
                            </Card.Text>
                            <Button href="/events" onClick={(e) => this.handleDeleteEvent(this.props.eventId, e)} id="join-button" variant="primary" style={{background: "#8fa0ad", border: "#8fa0ad"}}>Delete</Button>
                        </Card.Body>
                        <Card.Footer className="text-mute" class="eventbox-footer">{this.props.eventDate}</Card.Footer>
                    </Card>
                </div>
            )
    }}
}
function mapState(state) {
    const { users, authentication, events, event } = state;
    const { user } = authentication;
    return { user, users, events, event };
}

const actionCreators = {
    getEvents: eventActions.getAll,
    deleteEvent: eventActions.delete
}
const connectedEventCard = connect(mapState, actionCreators)(EventCard);
