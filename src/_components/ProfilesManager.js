import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import axios from "axios";
import {connect} from "react-redux";
import {userActions} from "../_actions";
import EditProfile from "./EditProfile";

export default class ProfilesManager extends Component {

    constructor(props) {
        super(props);

        this.state = {
            eventList: [],
        };
    }
    handleEditUser(){
            return(<EditProfile/>)

    }
    handleDeleteUser(id) {
        axios.delete(`http://localhost:4321/api/User/${id}`).then(res => {
            console.log(res);
            console.log(res.data);
        })
    }
    render() {
            return (
                <tbody>
                <tr>
                    <td>{this.props.userId}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.email}</td>
                    <Button variant="info" onClick={(e) => this.handleEditUser(e)}>Edit</Button>{' '}
                    <Button href="/profiles" variant="danger"
                            onClick={(e) => this.handleDeleteUser(this.props.userId, e)}>
                        Delete
                    </Button>
                </tr>

                </tbody>

            )
    }

}

function mapState(state) {
    const { users, authentication, events, event } = state;
    const { user } = authentication;
    return { user, users, events, event };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}
const connectedProfilesManager = connect(mapState, actionCreators)(ProfilesManager);