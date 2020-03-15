import React, { Component } from 'react'
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';

export default class EventCard extends Component {

    state = {
        categoryList: [],
        category: ""
    };

    componentDidMount() {
        axios.get(`http://localhost:4321/api/Category/${this.props.categoryId}`)
            .then(res => {
                const category = res.data;
                this.setState({category: category});
            })
    }


    render() {

        return (
        <div className="cards">
            <Card className="text-center">

                <Card.Header class="box-header" id={`cat${this.state.category.categoryName}`}>{this.props.eventName}</Card.Header>
                    <Card.Body>
                        <Card.Title>Category: <br/>{this.state.category.categoryName} </Card.Title>
                        <Card.Subtitle> Places taken: {this.props.currentParticipants}/{this.props.maxParticipants} </Card.Subtitle>
                        <Card.Text>
                            Description: <br/>
                            {this.props.eventDescription}
                            {console.log(this.state.category.categoryName)}
                        </Card.Text>
                        <Card.Text>
                            {this.props.eventPlace}
                        </Card.Text>
                        <Button variant="primary" style={{background: "#8fa0ad", border: "#8fa0ad"}}>Join</Button>
                    </Card.Body>
                    <Card.Footer className="text-mute" class="eventbox-footer">{this.props.eventDate}</Card.Footer>
                </Card>
            </div>
        )
    }
}