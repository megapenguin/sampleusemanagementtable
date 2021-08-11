import React, { useState, useEffect } from "react";
import { Form, Input, Modal, Button, Upload, Space } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { inject, observer } from "mobx-react";

const AddUserModal = ({ store }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
    //console.log(props.info);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleClose = () => {};

  const onFinish = (values) => {
    setConfirmLoading(true);
    store.addUser(values);
    setTimeout(() => {
      setIsModalVisible(false);
      setConfirmLoading(false);
    }, 500);
  };

  const onFinishFailed = (errorInfo) => {
    Modal.error({
      content: "Adding new user failed",
      okButtonProps: {
        style: { borderRadius: "50px" },
      },
    });
    setTimeout(() => {
      setIsModalVisible(true);
      setConfirmLoading(false);
    }, 500);
    //console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Button
        style={{
          background: "red",
          color: "white",
          fontWeight: "bold",
          borderRadius: "5px",
          borderColor: "red",
          height: "40px",
        }}
        className="modal-button-add"
        onClick={showModal}
      >
        <span className="desktop-view">
          <UserAddOutlined /> Add New User
        </span>
        <span className="mobile-view">
          <UserAddOutlined />
        </span>
      </Button>

      <Modal
        title="Add Step"
        visible={isModalVisible}
        confirmLoading={confirmLoading}
        onOk={onFinish}
        onCancel={handleCancel}
        afterClose={handleClose}
        destroyOnClose={true}
        footer={[
          <Button
            type="danger"
            style={{ background: "red", borderRadius: "5px" }}
            key="back"
            className="modal-button"
            onClick={handleCancel}
          >
            Cancel
          </Button>,
          <Button
            form="myForm"
            key="submit"
            htmlType="submit"
            className="modal-button"
            loading={confirmLoading}
            style={{
              background: "green",
              color: "white",
              borderRadius: "5px",
            }}
          >
            Add
          </Button>,
        ]}
      >
        <Form
          layout="vertical"
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          id="myForm"
        >
          <Form.Item
            style={{ fontWeight: "bold" }}
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter name!" }]}
          >
            <Input placeholder="Name of user" />
          </Form.Item>
          <Form.Item
            style={{ fontWeight: "bold" }}
            label="Age"
            name="age"
            rules={[{ required: true, message: "Please enter age!" }]}
          >
            <Input placeholder="Age of user" />
          </Form.Item>
          <Form.Item
            style={{ fontWeight: "bold" }}
            label="Home Phone Number"
            name="tel"
            rules={[
              { required: true, message: "Please enter home phone number!" },
            ]}
          >
            <Input placeholder="Home phone number of user" />
          </Form.Item>
          <Form.Item
            style={{ fontWeight: "bold" }}
            label="Personal Phone Number"
            name="phone"
            rules={[
              {
                required: true,
                message: "Please enter personal phone number!",
              },
            ]}
          >
            <Input placeholder="Personal phone number of user" />
          </Form.Item>
          <Form.Item
            style={{ fontWeight: "bold" }}
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please enter address!" }]}
          >
            <Input placeholder="Address of user" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default inject("store")(observer(AddUserModal));
