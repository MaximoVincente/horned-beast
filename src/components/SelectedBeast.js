import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "../custom.scss";



class SelectedBeast extends React.Component {
    render() {
        return (
            <>
                <Modal show={this.props.showModal} onHide={this.props.setShowModalFalse}>
                    <Modal.Header closeButton>
                        <Modal.Title className="font-monospace fw-bolder">
                            {this.props.selectedBeast.title}
                        </Modal.Title>
                    </Modal.Header>      
                    <img src={this.props.selectedBeast.image_url} alt={this.props.title} className="mx-3 my-auto"/>         
                    <Modal.Body className="font-monospace">                         
                        {this.props.selectedBeast.description}
                        </Modal.Body>
                    <Modal.Footer>
                        <Button className="font-monospace" variant="success" onClick={this.props.setShowModalFalse}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default SelectedBeast;