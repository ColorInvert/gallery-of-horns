import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
//Solid portion of this code created alongside instructor Reyes, retooling context to lab assignment.

class HornedBeast extends React.Component {
  constructor(props) {

    super(props)

    this.state = {

      clickedFavorite: false,

      totalFavorites: 0

    };
  };


  handleFavorite = () => {
    this.setState({

      clickedFavorite: true,
      totalFavorites: this.state.totalFavorites + 1,

    })
  }

  render() {
    return (

      <div className='HornedBeast'>
        {/* 
      //   <h2>{this.props.name}</h2>

      //   <p>{this.props.description}</p>

      //  <img
      //     src={this.props.imageUrl}
      //     alt={this.props.description}
      //     height={250}
      //     onClick={this.handleFavorite}
      //   />

      //   {this.state.clickedFavorite ? <p>Total Favorites: 💕 {this.state.totalFavorites}</p> : <p>Total Favorites: 🖤{this.state.totalFavorites}</p>} */}




        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.imageUrl} onClick={this.handleFavorite} />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>
            {this.props.description}
            </Card.Text>
            <Button variant="primary">
              
              {this.state.clickedFavorite ? <p>Total Favorites: 💕 {this.state.totalFavorites}</p> : <p>Total Favorites: 🖤{this.state.totalFavorites}</p>}
              
              </Button>
          </Card.Body>
        </Card>

      </div>

    )
  }
}

export default HornedBeast