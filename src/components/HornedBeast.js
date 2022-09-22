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
            keyword: this.props.keyword,
            horns: this.props.horns,            
        }
    }

    handleClick = () => {
        this.setState({ description: this.state.description + '❤️'});

        this.props.setShowModalTrue(this.props.id);
    }

    render() {
        return (
            <>
            <Card style={{ width: "15rem"}} className="h-100 mx-auto my-1 px-1" bg='info' border='dark'>
                <Card.Header className='h-auto'>
                    <Card.Title className='fw-bolder font-monospace'>{this.state.title}</Card.Title>
                </Card.Header>
                <Card.Img className='py-1 h-50 m-auto' variant="top" src={this.state.src} onClick={() => {
                    this.props.setShowModalTrue(this.props.id);
                }}/>
                <Card.Body>
                    <Spinner animation="grow" />
                    <Card.Text className="fw-normal">{this.state.description}</Card.Text>
                    <Button className='mb-3 font-monospace' variant="success" onClick={this.handleClick}>Favorite</Button>
                </Card.Body>
            </Card>
            </>
        );
  }
}

export default HornedBeast;