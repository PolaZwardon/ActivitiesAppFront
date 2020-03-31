import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, Image} from 'react-bootstrap';

const mail = require('../../img/contact.png').default;
const phone = require('../../img/phone.png').default;
const office = require('../../img/house.png').default;

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
                            <Image className="img-responsive" src={mail} alt={"award"} width='30px' height='30px'/>
                            <li>email: good2meet.info@gmail.com</li>
                            <Image className="img-responsive" src={phone} alt={"award"} width='30px' height='30px' />
                            <li>tel: +48 934 382 400</li>
                            <Image className="img-responsive" src={office} alt={"award"} width='30px' height='30px' />
                            <li>office: Krakow</li>
                            <h3>If you have any questions or suggestions, don't hesitate to contact us!</h3>

                        </ul>
                  </Card.Subtitle>

                </Card.Body>
                <Card.Footer className="text-mute" class="contact-footer">-</Card.Footer>
            </Card>
            </div>
        )
    }
}