import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from 'react-bootstrap/Spinner';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: this.props.description,
            src: this.props.src,
            title: this.props.title,
        }
    }

    handleClick = () => {
        this.setState({ description: this.state.description + '❤️'});
    }

    render() {
        return (
            <Card style={{ width: "18rem" }} className="mx-auto my-5">
                <Card.Img variant="top" src={this.state.src} />
                <Card.Body>
                    <Spinner animation="grow" />
                    <Card.Title>{this.state.title}</Card.Title>
                    <Card.Text className="fst-italic">{this.state.description}</Card.Text>
                    <Button variant="primary" onClick={this.handleClick}>Go somewhere</Button>
                </Card.Body>
            </Card>
        );
  }
}

export default HornedBeast;