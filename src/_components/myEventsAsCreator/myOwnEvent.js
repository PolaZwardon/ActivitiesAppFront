import React, { Component } from 'react'
import axios from 'axios';
import MyOwnEventsList from './myOwnEventsList'
let user = JSON.parse(localStorage.getItem('user'));



export default class MyOwnEvent extends Component {

    state = {
        eventList: [],
    };


    componentDidMount() {
        axios.get(`http://localhost:4321/api/Event/geteventsbyparticipantsId/${user.userId}`)
            .then(res => {
                const eventList = res.data;
                this.setState({eventList});
            })
    }

    render() {

        return (

            this.state.eventList.map(event =>
                <MyOwnEventsList
                myEventId = {event.eventId}
                userId={event.userId}
                />
                
            )

        )
    }
}