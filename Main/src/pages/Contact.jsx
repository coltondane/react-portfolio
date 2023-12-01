import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import sendEmail from "../utils/EmailHandler";

import '../style/contact.css';

// helpers
import { validateEmail } from "../utils/helpers";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [FormSubmitted, setFormSubmitted] = useState(false);
  // state variables for pop up modal
  const [show, setShow] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change when the form is not submitted
    if (!FormSubmitted) {
      const { target } = event;
      const inputType = target.name;
      const inputValue = target.value;
      // Based on the input type, we set the state of either email, username, and password
      if (inputType === 'email') {
        setEmail(inputValue);
      } else if (inputType === 'name') {
        setName(inputValue);
      } else {
        setMessage(inputValue);
      }
    }
  };

  // show modal handler
 function showModal(message) {
  console.log("showing modal");
  setModalMessage(message);
  setShow(true);
}
// close modal handler
 function closeModal() {
  console.log("closing modal");
  setShow(false);
}

  // form submit/ send email handler
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // check if email is valid
    if (!validateEmail(email)) {
      showModal('Please enter a valid email!');
      return;
    }
    // check if form is filled out
    if (name && email && message) {
      try {
        // send the form data to the my email calling sendEmail
        await sendEmail(name, email, message);
        
        // clear form
        setName('');
        setEmail('');
        setMessage('');

        setFormSubmitted(true);
        showModal('Thank you for reaching out! I will get back to you as soon as possible :)')

        // reset form submitted state after 5 seconds so they can type again if need be
        setTimeout(() => {
          setFormSubmitted(false);
          closeModal();
        }, 5000);

      } catch (error) {
        console.error(error);
        showModal('Form failed to reach my email as something went wrong, please try again later!');
      }
    } else {
      showModal('Please fill out all fields before submitting!');
    }
  }

  return (
    <>
    <Form onSubmit={handleFormSubmit} className="form-controller">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control name='email' onChange={handleInputChange} value={email} type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control name='name' onChange={handleInputChange} value={name} type="text" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formMessage">
        <Form.Label>Enter Message</Form.Label>
        <Form.Control name='message' onChange={handleInputChange} value={message} type="text" as="textarea" placeholder="Text" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    <Modal show={show} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modalMessage}</Modal.Body>
    </Modal>
    </>
  );
}

export default Contact;
