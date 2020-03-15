import React, { Component } from 'react'
import axios from 'axios';
import EventCard from "./EventCard";



export default class EventBoxes extends Component {

    state = {
        eventList: [],
    };


    componentDidMount() {
        axios.get(`http://localhost:4321/api/Event`)
            .then(res => {
                const eventList = res.data;
                this.setState({eventList});
            })
        }

    render() {

        return (
                this.state.eventList.map(event =>
                <EventCard
                    categoryId = {event.categoryId}
                    eventName = {event.eventName}
                    eventDescription = {event.eventDescription}
                    eventPlace = {event.eventPlace}
                    eventDate = {event.eventDate}
                    maxParticipants = {event.maxEventParticipants}
                    currentParticipants = {event.currentEventParticipants}
                />
        ))
    }
}