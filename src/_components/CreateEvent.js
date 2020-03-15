import React, { Component } from 'react';
import Form from 'react-jsonschema-form';
import axios from 'axios';


const mySchema ={
    "title": "Create Event",
    "type": "object",
    "required": [
        "UserId",
        "eventName",
        "eventDescription",
        "eventPlace",
        "eventDate",
        "categoryId"
    ],
    "properties": {

        "UserId":  {
            "type": "integer",
            "title": "User id"
        },
        "eventName": {
            "type": "string",
            "title": "Name"
        },
        "eventDescription": {
            "type": "string",
            "title": "Description"
        },
        "eventPlace": {
            "type": "string",
            "title": "Place"
        },
        "eventDate": {
            "type": "string",
            "title": "Date"
        },
        "categoryId": {
            "type": "integer",
            "title": "Category"
        },
        "maxEventParticipants": {
            "type": "integer",
            "title": "Max Participants"
        }
    }
};

export default class CreateEvent extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit({formData}) {
        axios.post('http://localhost:4321/api/Event', formData);
    }

    render() {
        return (
            <Form schema={mySchema} onSubmit={this.handleSubmit} />
        )
    }
}