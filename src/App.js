import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import data from "./data.json";
import HornedBeast from "./HornedBeast";
import SelectedBeast from "./SelectedBeast";

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



  //!Constructor is only if you need states in this component!
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
  //!Constructor is only if you need states in this component!




  handleShowModal = (name, image, description) => {
    this.setState({
      showingModal: true,
      cardName: name,
      cardImage: image,
      cardDescription: description
    })
  }

  handleCloseModal = () => {
    this.setState({
      showingModal: false
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

        <SelectedBeast
          handleCloseModal={this.handleCloseModal}
          title={this.state.cardName}
          imageUrl={this.state.cardImage}
          description={this.state.cardDescription}
          showingModal={this.state.showingModal}
        />

        <Footer />

      </>


    )
  }

}

export default App;
