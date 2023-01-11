import React from "react";

//Solid portion of this code created alongside instructor Reyes, retooling context to lab assignment.

class HornedBeast extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clickedFavorite: false
    };
  };


  handleFavorite = () => {
    this.setState({
      clickedFavorite: this.state.clickedFavorite ? false : true
    })
  }

  render() {
    return (
      <div className='HornedBeast'>
        <h2>{this.props.name}</h2>
        <p>BLAH: {this.props.horns}</p>
        <img
          src={this.props.imageUrl}
          alt={this.props.description}
          height={250}
          onClick={this.handleFavorite}
        />
        {this.state.clickedFavorite ? <p>Favorited💕</p> : <p>Favorited 🖤</p>}








      </div>)
  }
}

export default HornedBeast