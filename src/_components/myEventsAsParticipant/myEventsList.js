import React, { Component } from 'react'
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import {eventActions} from "../../_actions/event.actions";
import {connect} from "react-redux";
let user = JSON.parse(localStorage.getItem('user'));

export default class MyEventsList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            eventsList: "",

        };

        this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
    }

    componentDidMount() {
        axios.get(`http://localhost:4321/api/Event/${this.props.myEventId}`)
            .then(res => {
                const eventsList = res.data;
                this.setState({eventsList: eventsList});

            });

    }

    handleDeleteEvent(id) {
        /*return (e) => this.props.deleteEvent(id);*/
        axios.delete(`http://localhost:4321/api/Event/${id}`).then(res => {
            console.log(res);
            console.log(res.data);
        });
        location.reload();

    }

/*    handleJoinEvent(eventId, userId, currentParticipants, maxParticipants) {
        if (currentParticipants < maxParticipants) {
            /!*return (e) => this.props.deleteEvent(id);*!/
            axios.post(`http://localhost:4321/api/Event/${eventId}/${userId}`, {
                headers: {Content: "application/json"}
            });
            this.setState({button: "Leave"});
            location.reload();

        }

        //patch dodajacy +1 uzytkownika do eventu
        /!*        axios.patch(`http://localhost:4321/api/Event/${eventId}/`).then(res => {
                    console.log(res);
                    console.log(res.data);
                })*!/
    }*/


    render() {
        return (
            <div>
                <h1>{this.props.myEventId}</h1>
                <p>{this.state.eventsList.eventName}</p>
            </div>

        )
    }
}
    function

    mapState(state) {
        const {users, authentication, events, event} = state;
        const {user} = authentication;
        return {user, users, events, event};
    }

    const
    actionCreators = {
        getEvents: eventActions.getAll,
        deleteEvent: eventActions.delete
    }
const connectedMyEventsList = connect(mapState, actionCreators)(MyEventsList);
