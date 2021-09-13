import React from 'react';
import {
  Button,
  Modal as BootstrapModal,
  Form,
} from 'react-bootstrap';

const Modal = ({ show, closeHandler }) => (
  <BootstrapModal show={show} onHide={closeHandler}>
    <BootstrapModal.Header closeButton>
      <BootstrapModal.Title>Add new post</BootstrapModal.Title>
    </BootstrapModal.Header>
    <BootstrapModal.Body>
      <Form>
        <Form.Group>
          <Form.Label>Post title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Post text</Form.Label>
          <Form.Control type="text" placeholder="Enter text" />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-2">
          Submit
        </Button>
      </Form>
    </BootstrapModal.Body>
  </BootstrapModal>
);

export default Modal;
