import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

import HornedBeast from './HornedBeast.js';

import "bootstrap/dist/css/bootstrap.min.css";
import data from "../data.json";

class Main extends React.Component {
  render() {
    return (
      <>
        <Header />

            {data.map((hBeast, index) => {
            return <HornedBeast src={hBeast.image_url} description={hBeast.description} title={hBeast.title} key={index} />
          })}

        <Footer />
      </>
    );
  }
}

export default Main;
