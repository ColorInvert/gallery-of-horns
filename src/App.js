import React from "react";
import Student from "./Student";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import data from "./data.json";
import HornedBeast from "./HornedBeast";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';





class App extends React.Component {
  render() {

    return (
      <>
        <Header/>
        
        {data.map(beasts => <HornedBeast
          title={beasts.title}
          imageUrl={beasts.image_url}
          description={beasts.description}
          key={beasts._id}
        />)}
      
        <Footer/>
      </>


    )
  }

}

export default App;
