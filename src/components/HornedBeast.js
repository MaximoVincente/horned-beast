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

        this.props.setShowModalTrue(this.props.id);
    }

    render() {
        return (
            <Card style={{ width: "18rem"}} className="h-100 mx-auto px-1">
                <Card.Img className='py-1 h-50 m-auto' variant="top" src={this.state.src} onClick={() => {
                    this.props.setShowModalTrue(this.props.id);
                }}/>
                <Card.Body>
                    <Spinner animation="grow" />
                    <Card.Title>{this.state.title}</Card.Title>
                    <Card.Text className="fst-italic">{this.state.description}</Card.Text>
                    <Button className='mb-3' variant="secondary" onClick={this.handleClick}>Go somewhere</Button>
                </Card.Body>
            </Card>
        );
  }
}

export default HornedBeast;