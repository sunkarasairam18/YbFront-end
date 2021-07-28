import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import '../css/modal.css';

class Alert extends Component {
  render() {
    const {show,handleShow,subject} = this.props;
    return (
      <>        
        <Modal show={show} onHide={handleShow} aria-labelledby="contained-modal-title-vcenter"
      centered >          
            <Modal.Body id="head" className="text-center fs-5 text-primary fw-light">{subject}</Modal.Body>
            <hr id="line"/>
            <Button variant="" id="ok" className="fs-6 text-primary fw-light" onClick={handleShow}>
                Ok
            </Button>
        </Modal>
      </>
    );
  }
}

export default Alert;
