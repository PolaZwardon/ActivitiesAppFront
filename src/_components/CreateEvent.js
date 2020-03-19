import React, { Component } from 'react';
import Form from 'react-jsonschema-form';
import axios from 'axios';
let user = JSON.parse(localStorage.getItem('user'));


const mySchema ={
    "title": "Create Event",
    "type": "object",
    "required": [
        "eventName",
        "eventDescription",
        "eventPlace",
        "eventDate",
        "categoryId"
    ],
    "properties": {

        "UserId":  {

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
            "title": "Category",
            "anyOf": [
                {
                    "type": "integer",
                    "enum": [
                        1
                    ],
                    "title": "Sport"
                },
                {
                    "type": "integer",
                    "enum": [
                        2
                    ],
                    "title": "Lifestyle"
                },
            ]
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
    state = {
        categories: [],
    };
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit({formData}) {
        formData.UserId=user.userId;
        axios.post('http://localhost:4321/api/Event', formData);
    }

    componentDidMount() {
        axios.get(`http://localhost:4321/api/Category`)
            .then(res => {
                const categories = res.data;
                this.setState({categories: categories});
            });
    }

    render() {
        return (
            <div class="form-add-event">
            <Form href="/events" id="schema" schema={mySchema} uiSchema={uiSchema} onSubmit={this.handleSubmit} />
            </div>
        )
    }
}