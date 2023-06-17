import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "../common/Modal";

const SignUpModal = ({ close }) => {
  return (
    <Modal>
      <ModalHeader>SignUp</ModalHeader>
      <ModalBody></ModalBody>
      <ModalFooter>
        <button onClick={close}>Close</button>
      </ModalFooter>
    </Modal>
  );
};

export default SignUpModal;
