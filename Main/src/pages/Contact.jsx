import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

// helper 
import { validateEmail } from "../utils/helpers";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [FormSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change when the form is not submitted
    if (!FormSubmitted) {
      const { target } = event;
      const inputType = target.name;
      const inputValue = target.value;
      console.log(event.target.value);
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

  // form submit handler
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // check if email is valid
    if (!validateEmail(email)) {
      alert('Please enter a valid email!');
      return;
    }
    // check if form is filled out
    if (name && email && message) {
      // clear form
      setName('');
      setEmail('');
      setMessage('');
      setFormSubmitted(true);
    } else {
      alert('Please fill out all fields before submitting!');
    }
  }

  return (
    <Form onSubmit={handleFormSubmit}>
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
  );
}

export default Contact;