import React, { Component } from 'react'
import axios from 'axios';
import MyEventsList from './myEventsList'
let user = JSON.parse(localStorage.getItem('user'));



export default class MyEvent extends Component {

    state = {
        eventList: [],
    };


    componentDidMount() {
        axios.get(`http://localhost:4321/event/geteventsbyparticipantsId/${user.userId}`)
            .then(res => {
                const eventList = res.data;
                this.setState({eventList});
            })
    }

    render() {

        return (

            this.state.eventList.map(event =>
                <MyEventsList
                myEventId = {event.eventId}
                userId={event.userId}
                />
                
            )

        )
    }
}