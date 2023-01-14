import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
//Solid portion of this code created alongside instructor Reyes, retooling context to lab assignment.

class HornedBeast extends React.Component {
  constructor(props) {

    super(props)

    this.state = {

      clickedFavorite: false,
      totalFavorites: 0,

    };
  };


  handleFavorite = () => {
    this.setState({

      clickedFavorite: true,
      totalFavorites: this.state.totalFavorites + 1,

    })
  }


  createModal = () =>{
    this.props.handleShowModal(this.props.title, this.props.imageUrl, this.props.description);
  }



  render() {

    return (

      <div className='HornedBeast'>

        <Card style={{ width: '18rem' }}>

          <Card.Img variant="top" src={this.props.imageUrl} onClick={this.createModal} />

          <Card.Body>

            <Card.Title>{this.props.title}</Card.Title>

            <Card.Text>

              {this.props.description}

            </Card.Text>

            <Button variant="primary" onClick={this.handleFavorite}>

              {this.state.clickedFavorite ? <p>Total Favorites: 💕 {this.state.totalFavorites}</p> : <p>Total Favorites: 🖤{this.state.totalFavorites}</p>}

            </Button>

          </Card.Body>

        </Card>

      </div>

    )











    
  }
}

export default HornedBeast