import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

import HornedBeast from './HornedBeast.js';

import "bootstrap/dist/css/bootstrap.min.css";
import data from "../data.json";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Main extends React.Component {
  render() {
    return (
      <>
        <Header />
          <Container>
          <Row lg={4}>
            {data.map((hBeast, index) => {
            return (<Col classname="mb-3"><HornedBeast src={hBeast.image_url} description={hBeast.description} 
            title={hBeast.title} key={index} /></Col>)
          })}
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}

export default Main;
