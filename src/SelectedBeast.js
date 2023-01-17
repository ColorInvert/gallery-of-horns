import React from "react";
import Modal from 'react-bootstrap/Modal';



//This component holds the modal display information.
class SelectedBeast extends React.Component {


  render() {

    return (

      <Modal

        show={this.props.showingModal}

        onHide={this.props.handleCloseModal}>

        <Modal.Header closeButton>

          <Modal.Title>{this.props.title}</Modal.Title>

        </Modal.Header>

        <Modal.Body>

          <img src={this.props.imageUrl} alt={this.props.description} height={300} />

          {this.props.description}

        </Modal.Body>

      </Modal>
    )
  }
}

export default SelectedBeast