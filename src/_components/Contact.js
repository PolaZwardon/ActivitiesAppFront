import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Contact extends Component {

    render() {
        return (

            <div class="contact-container">

                <div class="contact-header">
                    <h2>Contact us!</h2>
                </div>
                <div class="contact-information">
                    <ul>
                        <li>email: meetandfun@info.com</li>
                        <li>tel: +48 934 382 400</li>
                        <li>office: Codecool, Krakow</li>

                    </ul>
                </div>
            </div>
        )
    }
}