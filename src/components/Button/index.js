import { Button } from "antd";
import React from "react";

const ButtonCustom = ({ title, click }) => {
  return (
    <Button type="primary" onClick={click}>
      {title}
    </Button>
  );
};

export default ButtonCustom;
