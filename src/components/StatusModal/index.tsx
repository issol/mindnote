import React from 'react';
import { Button, Modal } from 'react-bootstrap';

type Props = {
  statusMessage: string;
  show: boolean;
  onHide: (event: React.MouseEvent<HTMLElement>) => void;
};

const StatusModal = ({ statusMessage, show, onHide }: Props) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>{statusMessage}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default StatusModal;
