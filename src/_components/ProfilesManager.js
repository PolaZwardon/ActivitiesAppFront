import React, {BaseSyntheticEvent as e, Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import axios from "axios";
import {connect} from "react-redux";
import {userActions} from "../_actions";
import EditProfile from "./EditProfile";
import {history} from "../_helpers";
import {Modal} from "react-bootstrap";


export default class ProfilesManager extends Component {

    constructor(props) {
        super(props);

        this.state = {
            eventList: [],
            clicked: false,
            userType: "",
            userEmail: "",
            userId: ""
        };
    }
    handleEditUser(userTypeId, email, id){
        this.setState({clicked: true});
        this.setState({userType: userTypeId});
        this.setState({userEmail: email});
        this.setState({userId: id});

    }
    handleDeleteUser(id) {
        axios.delete(`http://localhost:4321/api/User/${id}`).then(res => {
            console.log(res);
            console.log(res.data);
        })
    }
    handleWindowClose(){
        this.setState({ clicked: false });
        location.reload();

    }

    render() {
        if(this.state.clicked===false){
            return (
                <tbody>
                <tr>
                    <td>{this.props.userId}</td>
                    <td>{this.props.name}</td>
                    <td>{this.props.email}</td>
                    <Button variant="info" onClick={(e) => this.handleEditUser(this.props.userTypeId, this.props.email, this.props.userId, e)}>Edit
                    </Button>{' '}
                    <Button href="/profiles" variant="danger"
                            onClick={(e) => this.handleDeleteUser(this.props.userId, e)}>
                        Delete
                    </Button>
                </tr>

                </tbody>

            )}
            else if(this.state.clicked){
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
                        <Modal.Dialog>
                            <Modal.Header>
                                <Modal.Title>Edit Profile</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                        <EditProfile
                        userTypeId={this.state.userType}
                        userEmail={this.state.userEmail}
                        userId={this.state.userId}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={(e) => this.handleWindowClose(e)} variant="primary">Cancel</Button>
                    </Modal.Footer>
                    </Modal.Dialog>
                    </tr>
                    </tbody>
                )
        }
    }
}
function refreshPage() {
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