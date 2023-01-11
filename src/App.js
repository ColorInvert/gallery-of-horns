import React from "react";
import Student from "./Student";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import data from "./data.json";
import HornedBeast from "./HornedBeast";




class App extends React.Component {
  render() {

    return (
      <>
        {data.map(beasts => <HornedBeast 
        title={beasts.title}
        imageUrl={beasts.image_url}
        description={beasts.description}
        />)}
      </>


    )
  }

}

export default App;
