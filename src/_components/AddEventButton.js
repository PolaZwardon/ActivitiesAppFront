import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";

export default class AddEventButton extends Component {

    render() {
        return (

            <div class="add-event-container">
                <Button id="add-event-button" href="/CreateEventpage" variant="primary" >Add Event</Button>
            </div>
        )
    }
}