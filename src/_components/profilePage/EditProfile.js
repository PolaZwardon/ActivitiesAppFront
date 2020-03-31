import React, { Component } from 'react'
import axios from 'axios';
import ProfilesManager from "../profilesManager/ProfilesManager";
import {Modal, Button} from "react-bootstrap";
import Form from "react-jsonschema-form";
let user = JSON.parse(localStorage.getItem('user'));

const mySchema ={
    "title": "Change username",
    "type": "object",
    "required": [
        "name"
    ],
    "properties": {

        "name": {
            "type": "string",
            "title": "New Username"
        },

    }
};

export default class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            clicked: true,
        };
    }

    handleSubmit({formData}) {
/*        formData.email=this.props.userEmail;
        formData.userTypeId=this.props.userTypeId;*/
        axios.patch(`http://localhost:4321/user/${this.props.userId}`, formData).then(res => {
            console.log(res);
            console.log(res.data);
        });
        location.reload();

    };

    render() {

        return (

                    <div className="form-change-name">
                        <Form id="schema" schema={mySchema} onSubmit={this.handleSubmit}>
                        </Form>
                    </div>

)

    }

}