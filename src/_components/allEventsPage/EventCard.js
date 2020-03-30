import React, { Component } from 'react'
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import {eventActions} from "../../_actions/event.actions";
import {connect} from "react-redux";
let user = JSON.parse(localStorage.getItem('user'));

export default class EventCard extends Component {

    constructor(props) {
        axios.get(`http://localhost:4321/api/Event/geteventsbyparticipantsId/${user.userId}`)
            .then(res => {
                const eventsList = res.data;
                this.setState({eventsList: eventsList});

            });
        super(props);

        this.state = {
            categoryList: [],
            category: "",
            userInfo: "",
            button: "Join",
            eventsList: [],
            userCanJoinEvent: true
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

    checkIfUserCanJoinEvent(eventId){

/*        if(this.state.eventsList===null){
            this.setState({userCanJoinEvent: true});
            console.log("WCHODZI W PĘTLĘ-NULL")

        }else {
            this.state.eventsList.forEach((userEvent)=> {
                if (userEvent.eventId === eventId) {
                    this.setState({userCanJoinEvent: false});
                    console.log("WCHODZI W PĘTLĘ")
                }
            })
        }*/



                let returnValue = true;
                try{
                this.state.eventsList.forEach((userEvent)=>{
                    if(userEvent.eventId === eventId){
                        console.log("WCHODZI W PĘTLĘ");
                        returnValue = false;
                    }
                })}
                catch(err){
                    returnValue = false;
                    console.log("WCHODZI W CATCHA")

                }
                console.log(returnValue);
                return returnValue
    };


    handleDeleteEvent(id) {
        /*return (e) => this.props.deleteEvent(id);*/
        axios.delete(`http://localhost:4321/api/Event/${id}`).then(res => {
            console.log(res);
            console.log(res.data);
        });
        location.reload();

    }

    handleButtonActions(){
        if(this.props.currentEventParticipants===this.props.maxEventParticipants) {
            this.setState({button: "Cannot join"})
        }
}

    handleJoinEvent(eventId, userId, currentParticipants, maxParticipants, categoryId, eventDate, eventPlace, eventDescription, eventName) {

        if(currentParticipants<maxParticipants){
            axios.post(`http://localhost:4321/api/Event/${eventId}/${userId}`, {
                headers: {Content: "application/json"}
            }).then(res => {
                console.log(res);
                console.log(res.data);
            });

            console.log(this.checkIfUserCanJoinEvent(eventId));
            if(this.checkIfUserCanJoinEvent(eventId)){
            let cParticipants = currentParticipants+1;

            axios.patch(`http://localhost:4321/api/Event/${eventId}`, {eventName: eventName,
                eventDescription: eventDescription,
                eventPlace: eventPlace,
                eventDate: eventDate,
                categoryId: categoryId,
                currentEventParticipants: cParticipants,
                maxEventParticipants: maxParticipants},{
                headers: {'Content-Type': 'application/json'}}
            ).then(res => {
                console.log(res);
                console.log(res.data);
            }).catch(function (error) {
                console.log(error.response);
            })}
/*
            location.reload();
*/
        }
    }

    render() {

        if (user.userTypeId === 1&&user.userId!==this.props.userId) {
/*
            {this.handleButtonActions()}
*/

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
                        <Button  onClick={(e) => this.handleJoinEvent(this.props.eventId, user.userId, this.props.currentParticipants, this.props.maxParticipants, this.props.categoryId, this.props.eventDate, this.props.eventPlace, this.props.eventDescription, this.props.eventName, e)} id="join-button" variant="primary" style={{background: "#8fa0ad", border: "#8fa0ad"}}>{this.state.button}</Button>
                    </Card.Body>
                    <Card.Footer className="text-mute" class="eventbox-footer">{this.props.eventDate}</Card.Footer>
                </Card>
            </div>
        )
    }

        else if(user.userTypeId===2||user.userId===this.props.userId){
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

                            <Button href="/events" onClick={(e) => this.handleDeleteEvent(this.props.eventId, e)} id="join-button" variant="primary" type="submit" style={{background: "#8fa0ad", border: "#8fa0ad"}}>Delete</Button>
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
