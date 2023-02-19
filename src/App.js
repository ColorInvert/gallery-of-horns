import React from "react";
import Form from 'react-bootstrap/Form';
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
      currentBeasts: data
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

  handleFilterChange = (e) => {

    console.log(e.target.value)




    var hornCountWanted = Number(e.target.value)
    console.log(typeof(hornCountWanted));
    //var hornCountActual = data

    console.log(`current desired horncount is ${hornCountWanted}`)


   var filtered = data.filter(item => item.horns === hornCountWanted || hornCountWanted === 0)


    this.setState({currentBeasts: filtered})

  }





  render() {

    return (
      <>
        <Header />

        <Form>
          <Form.Label> Filter by number of horns:</Form.Label>
          <Form.Control as="select" onChange={this.handleFilterChange}>
            <option value={0} >Show All</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
            <option value={4}>Four</option>
            <option value={100}>One Hundred or More</option>
          </Form.Control>
        </Form>

        {this.state.currentBeasts.map(beasts => <HornedBeast

          title={beasts.title}
          imageUrl={beasts.image_url}
          description={beasts.description}
          key={beasts._id}
          horns={beasts.horns}
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
