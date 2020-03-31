import React, { Component } from 'react'
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import {eventActions} from "../../_actions/event.actions";
import {connect} from "react-redux";
import EditProfile from "../profilePage/EditProfile";
let user = JSON.parse(localStorage.getItem('user'));

export default class MyOwnEventsList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            eventsList: "",
            clicked: false,
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
    handleDeleteEvent(eventId, userId) {

        axios.delete(`http://localhost:4321/api/Event/${eventId}/${userId}`,
            {headers: {'Content-Type': 'application/json','Accept': 'text/plain'}}).then(res => {
                console.log(res);
                console.log(res.data);
            }).catch(function (error) {
                console.log(error.response);
            });
        let cParticipants = this.state.eventsList.currentEventParticipants-1;

        axios.patch(`http://localhost:4321/api/Event/${eventId}`, {eventName: this.state.eventsList.eventName,
            eventDescription: this.state.eventsList.eventDescription,
            eventPlace: this.state.eventsList.eventPlace,
            eventDate: this.state.eventsList.eventDate,
            categoryId: this.state.eventsList.categoryId,
            currentEventParticipants: cParticipants,
            maxEventParticipants: this.state.eventsList.maxEventParticipants},{
            headers: {'Content-Type': 'application/json; charset=utf-8' ,'Accept': 'application/json'}}
        ).then(res => {
            console.log(res);
            console.log(res.data);
        }).catch(function (error) {
            console.log(error.response);
        });
        location.reload();

    }

    render() {
        if(user.userid = this.props.userId){
         return (
                <tbody>
                <tr>
                    <td>{this.state.eventsList.eventName}</td>
                    <td>{this.state.eventsList.eventDescription}</td>
                    <td>{this.state.eventsList.eventPlace}</td>
                    <td>{this.state.eventsList.eventDate}</td>
                    <td>{this.state.eventsList.currentEventParticipants}</td>
                    <td>{this.state.eventsList.maxEventParticipants}</td>

                    <Button variant="info" onClick={(e) => this.handleDeleteEvent(this.state.eventsList.eventId, user.userId, e)}>Leave
                    </Button>{' '}

                </tr>

                </tbody>

            )}
    else {
        <div>
            <h2>No events to show</h2>
        </div>
        }}

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
const connectedMyEventsList = connect(mapState, actionCreators)(MyOwnEventsList);
