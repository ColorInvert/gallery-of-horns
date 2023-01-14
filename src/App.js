import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import data from "./data.json";
import HornedBeast from "./HornedBeast";
import Modal from 'react-bootstrap/Modal';

//!NOT IN USE
//!import Student from "./Student";
//!import Main from "./Main";


//HIERARCHY: lower number is a higher parent.
//index.js 1
//App.js 2
//Header 3
//HornedBeast 3
//Footer 3

class App extends React.Component {

  constructor(props) {

    super(props)

    this.state = {

      clickedFavorite: false,
      showingModal: false,
      cardName: '',
      cardDescription: '',
      cardImage: '',
      totalFavorites: 0,

    };
  };

  handleShowModal = (name, image, description) => {
    this.setState({
      showModal: true,
      cardName: name,
      cardImage: image,
      cardDescription: description
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }





  render() {

    return (
      <>
        <Header />

        {data.map(beasts => <HornedBeast

          title={beasts.title}
          imageUrl={beasts.image_url}
          description={beasts.description}
          key={beasts._id}
          handleShowModal={this.handleShowModal}

        />

        )}

        <Modal

          show={this.state.showModal}

          onHide={this.handleCloseModal}>

          <Modal.Header closeButton>

            <Modal.Title>{this.state.cardName}</Modal.Title>

          </Modal.Header>

          <Modal.Body>

            <img src={this.state.cardImage} alt={this.state.cardDescription} height={300} />

            {this.state.cardDescription}

          </Modal.Body>

        </Modal>

        <Footer />

      </>


    )
  }

}

export default App;
