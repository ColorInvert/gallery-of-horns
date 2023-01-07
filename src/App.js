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

        <Main title={"mainMenu"} imageUrl={"https://img.itch.zone/aW1hZ2UvMjg0NDYwLzEzODYwMjkucG5n/347x500/0mLE8Q.png"} description={"The title screen for Nest Defender The First: The Start Of An Empire"} />

        <Footer />
      </>


    )
  }

}

export default App;
