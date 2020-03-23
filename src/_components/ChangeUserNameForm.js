import React, { Component } from 'react';
import Form from 'react-jsonschema-form';
import axios from 'axios';
import {EventPage} from "../EventPage";
import {Route} from "react-router-dom";
import Redirect from "react-router-dom/es/Redirect";
let user = JSON.parse(localStorage.getItem('user'));


const mySchema ={
    "title": "Change username",
    "type": "object",
    "required": [

        "name"
    ],
    "properties": {

        "userId":  {

        },
        "name": {
            "type": "string",
            "title": "Name"
        },

        "email":  {

        },
        "userTypeId":  {

        },
    }
};



export default class ChangeUserNameForm extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit({formData}) {
        formData.email=user.email;
        formData.userTypeId=user.userTypeId;

        axios.patch(`http://localhost:4321/api/User/${user.userId}`, formData).then(res => {
            console.log(res);
            console.log(res.data);
        });

    };


    render() {
        return (
            <div class="form-change-name">
                <Form  id="schema" schema={mySchema} onSubmit={this.handleSubmit} >

                </Form>
            </div>
        )
    }
}