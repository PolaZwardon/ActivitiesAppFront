import React, { Component } from 'react';
import Form from 'react-jsonschema-form';
import axios from 'axios';
import { history } from '../_helpers';

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
                {
                    "type": "integer",
                    "enum": [
                        3
                    ],
                    "title": "Fun"
                },
                {
                    "type": "integer",
                    "enum": [
                        4
                    ],
                    "title": "Music"
                },
                {
                    "type": "integer",
                    "enum": [
                        5
                    ],
                    "title": "Travel"
                },
                {
                    "type": "integer",
                    "enum": [
                        6
                    ],
                    "title": "Hobbies"
                },
                {
                    "type": "integer",
                    "enum": [
                        7
                    ],
                    "title": "Outdoor"
                },
                {
                    "type": "integer",
                    "enum": [
                        8
                    ],
                    "title": "Art/Cultural"
                },
                {
                    "type": "integer",
                    "enum": [
                        9
                    ],
                    "title": "Eating out"
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

        history.push("/events");
        location.reload();
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
            <Form  id="schema" schema={mySchema} uiSchema={uiSchema} onSubmit={this.handleSubmit}>

            </Form>


            </div>
        )
    }
}