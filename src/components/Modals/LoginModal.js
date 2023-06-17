import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "../common/Modal";

const LoginModal = ({ close }) => {
  return (
    <Modal>
      <ModalHeader>Login</ModalHeader>
      <ModalBody></ModalBody>
      <ModalFooter>
        <button onClick={close}>Close</button>
      </ModalFooter>
    </Modal>
  );
};

export default LoginModal;
