import React from "react";
import Student from "./Student";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";


class App extends React.Component {
  render() {

    return (
      <>
        <Header />

        <Main title={"Nest Defender Title Screen"} imageUrl={"https://img.itch.zone/aW1hZ2UvMjg0NDYwLzEzODYwMjkucG5n/347x500/0mLE8Q.png"} description={"The title screen for Nest Defender The First: The Start Of An Empire"} />

        <Main title={"Astronaut Gameplay"} imageUrl={"https://img.itch.zone/aW1hZ2UvMjE1Mzc3LzEwMTc2NjIuZ2lm/347x500/sY2mzc.gif"} description={"A gif image of an astronaut in a 2D game propelling themselves with a shotgun's recoil."} />

        <Footer />
      </>


    )
  }

}

export default App;
