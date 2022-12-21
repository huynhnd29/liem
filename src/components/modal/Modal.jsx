import React, { useState } from "react";
import { Button, Modal } from "antd";
import ButtonCustom from "../Button";

const ModalComponent = ({
  title,
  buttonTitle,
  isModalOpen,
  setIsModalOpen,
}) => {
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{title}</p>
      </Modal>
    </>
  );
};

export default ModalComponent;
