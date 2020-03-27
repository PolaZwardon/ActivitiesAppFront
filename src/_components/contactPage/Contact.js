import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';

export default class Contact extends Component {

    render() {
        return (

            <div className="contact-card">
            <Card className="contact-container">

                <Card.Header class="contact-header">
                    <h2>Contact us!</h2>
                </Card.Header>
                <Card.Body class="contact-body">
                    <Card.Subtitle class="contact-information">
                        <ul>
                            <li>email: meetandfun@info.com</li>
                            <li>tel: +48 934 382 400</li>
                            <li>office: Codecool, Krakow</li>

                        </ul>
                  </Card.Subtitle>

                </Card.Body>
                <Card.Footer className="text-mute" class="contact-footer">-</Card.Footer>
            </Card>
            </div>
        )
    }
}