import React from 'react';
import '../App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from '../data.json';
import SelectedBeast from './SelectedBeast.js';
import BeastForm from './BeastForm.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "../custom.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {},
      renderedBeasts: data,
    };
  }

  setShowModalTrue = (key) => {
    this.setState({ showModal: true });
    const filteredBeast = data.filter((hBeast) => {
      return hBeast._id === key;
    });
    this.setState({ selectedBeast: filteredBeast[0] });
  }

  setShowModalFalse = () => {
    this.setState({ showModal: false });
  }

  //BeastForm Component

  handleForm = (event) => {
    event.preventDefault();
    const selectedHorns =parseInt(event.target.value);
    let filteredBeasts
    if (selectedHorns){
    filteredBeasts = data.filter(hBeast => hBeast.horns === selectedHorns);
    }else{
      filteredBeasts = data
    }
    this.setState({renderedBeasts:filteredBeasts});
  };

  render() {
    return (
      <>
        <Header />
        <BeastForm handleForm={this.handleForm}/>
        <Main setShowModalTrue={this.setShowModalTrue} setShowModalFalse={this.setShowModalFalse} handleForm={this.handleForm} renderedBeasts={this.state.renderedBeasts}/>
        <SelectedBeast showModal={this.state.showModal} setShowModalFalse={this.setShowModalFalse} selectedBeast={this.state.selectedBeast} />
        <Footer />
      </>
    );
  }
}

export default App;
