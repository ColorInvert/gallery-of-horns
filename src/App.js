import React from "react";
import Student from "./Student";

class App extends React.Component{
  render(){
    console.log(this.props.name);
    return(
    <>
      <Student name={"Anthonyyyy"} fruit = {"Pineapple"}/>
      <Student name={"Danner"} fruit = {"Apple"}/>
      <Student name={"Nick"} fruit = {"Orange"}/>
    </>
    
    
    )
  }

}

export default App;
//All above was following along with Roger Reyes in class.