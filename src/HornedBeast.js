import React from "react";

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

      clickedFavorite : true, 
      totalFavorites: this.state.totalFavorites + 1,

    })
  }

  render() {
    return (

      <div className='HornedBeast'>

        <h2>{this.props.name}</h2>

        <p>{this.props.description}</p>

        <img
          src={this.props.imageUrl}
          alt={this.props.description}
          height={250}
          onClick={this.handleFavorite}
        />

        {this.state.clickedFavorite ? <p>Total Favorites: 💕 {this.state.totalFavorites}</p> : <p>Total Favorites: 🖤{this.state.totalFavorites}</p>}


      </div>)
  }
}

export default HornedBeast