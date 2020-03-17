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
            "title": "Description",
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
const uiSchema = {
    "eventDescription":
        {
            "ui:widget": "textarea",
            "ui:options": {
                rows: 7
            }
    },
    "eventDate":
        {
            "ui:widget": "alt-datetime"
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
            <div class="form-add-event">
            <Form id="schema" schema={mySchema} uiSchema={uiSchema} onSubmit={this.handleSubmit} />
            </div>
        )
    }
}