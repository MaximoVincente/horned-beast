import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HornedBeast from './HornedBeast.js';
import data from "../data.json";

class Main extends React.Component {
    render() {
        return (
            <>
                <Container>
                    <Row lg={4}>
                        {data.map((hBeast, index) => {
                            return (<Col classname="mb-3"><HornedBeast src={hBeast.image_url} description={hBeast.description}
                                title={hBeast.title} key={index} /></Col>)
                        })}
                    </Row>
                </Container>
            </>
        );
    }
}

export default Main;