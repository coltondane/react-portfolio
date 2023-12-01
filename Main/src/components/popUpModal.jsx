// imports 
import React from 'react';
import Modal from 'react-bootstrap/Modal';

const ModalPopUp = (props) => ({ show, closeModal, modalContent }) => {
    return (
        <Modal show={show} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>{modalContent}</Modal.Body>
        </Modal>
    )
}