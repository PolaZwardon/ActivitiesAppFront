import React, { Component } from 'react'
import axios from 'axios';
import EventCard from "./EventCard";
import {usersEventsService} from "../_services/userEvents.service";
import {ProfilePage} from "../ProfilePage";

let user = JSON.parse(localStorage.getItem('user'));



export default class UserEventList extends Component {

    state = {
        eventList: [],
    };


    componentDidMount() {
        axios.get(`http://localhost:4321/api/Event/geteventsbyparticipantsId/${user.userId}`).then(res => {
               const eventList = res.data;
               this.setState({eventList});
           });
        };


    render() {

        return ( 
            this.state.eventList.map(event =>
                <ProfilePage
                usersEventsId = {event.eventId}
                />
            ))
    }
}