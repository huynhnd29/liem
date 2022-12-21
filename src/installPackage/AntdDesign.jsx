import { Button, Dropdown, Input, Space } from "antd";
import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { AntdDesignWrapper, InputAntd } from "./antdDesignStyle";
import ModalComponent from "../components/modal/Modal";
import ButtonCustom from "../components/Button";
import TableCustom from "../components/Table";
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
const AntdDesign = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      ),
    },
  ];
  return (
    <AntdDesignWrapper>
      <ModalComponent
        title="Modal thứ nhất"
        buttonTitle="button thứ nhất"
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <hr />
      <ButtonCustom title={"button"} click={() => setIsModalOpen(true)} />

      <hr />
      <TableCustom
        action={
          <div>
            <Space size="middle">
              <a>Invite </a>
              <a>Delete</a>
            </Space>
          </div>
        }
      />
      <hr />
      <TableCustom
        action={
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Hover me
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        }
      />
    </AntdDesignWrapper>
  );
};

export default AntdDesign;
