import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import styles from './styles.module.css';
import STRINGS from './../../../res/strings/en.js';



class AddModal extends React.Component{

    render(){
        return(
            <Modal show={this.props.show} onHide={this.props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>{STRINGS.addModalTitle + this.props.table}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form.Group controlId="addTextArea">
                        <Form.Control as="textarea" rows="3" 
                                    value={this.props.text}
                                    onChange={(e) => {this.props.onChange(e.target.value)}}/>
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onSave}>Save</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default AddModal;