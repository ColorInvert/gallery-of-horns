import React from "react";

class Student extends React.Component{
  render(){
    return(
      <>
        <h2>{this.props.name}</h2>
        <p>Favorite Fruit: {this.props.fruit}</p>
      </>
    )
  }
}

export default Student
//All above was following along with Roger Reyes in class.