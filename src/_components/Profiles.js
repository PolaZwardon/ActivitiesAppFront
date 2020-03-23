import React, { Component } from 'react'
import axios from 'axios';
import ProfilesManager from "./ProfilesManager";
import {Card} from "react-bootstrap";




export default class Profiles extends Component {

    state = {
        profilesList: []
    };

    componentDidMount() {
        axios.get(`http://localhost:4321/api/User`)
            .then(res => {
                const profilesList = res.data;
                this.setState({profilesList});
            })

    }
    render() {

        return (
            this.state.profilesList.map(profile =>

                <ProfilesManager
                    userId = {profile.userId}
                    name = {profile.name}
                    email = {profile.email}
                />

            ))

                    }
}