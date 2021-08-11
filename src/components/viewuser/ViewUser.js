import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Row,
  Col,
  Form,
  Input,
  Modal,
  Divider,
  Typography,
} from "antd";
import { SaveOutlined, LeftOutlined, IdcardOutlined } from "@ant-design/icons";
import { inject, observer } from "mobx-react";

const ViewUser = ({ store }) => {
  const [form] = Form.useForm();
  const { Title } = Typography;
  const [data, setData] = useState("");
  const USER_URL = "http://localhost:500/users";
  let dataHistory = useHistory();
  let value = dataHistory.location.pathname.split("/users/");
  useEffect(() => {
    store.fetchOneUser(value[1], form);

    const getUser = async () => {
      const newData = await fetchUser(value[1]);
      setData(newData);
      console.log(newData);
      //setValues(newData);
    };
    getUser();

    // console.log("user", store.user);
  }, [form]);

  const fetchUser = async (id) => {
    const res = await fetch(`${USER_URL}/${id}`);
    const data = await res.json();
    return data;
  };

  const setValues = () => {
    form.setFieldsValue({
      id: store.user.id,
      name: store.user.name,
      age: store.user.age,
      tel: store.user.tel,
      phone: store.user.phone,
      address: store.user.address,
    });
  };

  const onFinish = (values) => {
    console.log(values);
    store.updateUser(value[1], values);
  };

  const onFinishFailed = (errorInfo) => {
    Modal.error({
      content: "Failed to update profile info",
      okButtonProps: {
        style: { borderRadius: "50px" },
      },
    });

    //console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Link to="/users">
        <Button
          style={{
            color: "red",
            fontWeight: "bold",
            borderRadius: "5px",

            height: "40px",
          }}
          danger
        >
          <span className="desktop-view">
            <LeftOutlined /> Back to Home
          </span>
          <span className="mobile-view">
            <LeftOutlined />
          </span>
        </Button>
      </Link>

      <Divider>
        <Title>
          <IdcardOutlined />{" "}
          <span className="desktop-view">Account Information</span>
        </Title>
      </Divider>
      <Form
        style={{ fontWeight: "bold" }}
        layout="vertical"
        name="basic"
        form={form}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        id="myForm"
      >
        <Row>
          <Col>
            <Form.Item label="ID Number:" name="id">
              <Input
                disabled={true}
                bordered={false}
                style={{ color: "grey", fontWeight: "bold" }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col flex="auto" style={{ padding: 5, fontWeight: "bold" }}>
            <Form.Item label="Name: " name="name">
              <Input style={{ border: 0, borderBottom: "2px solid black" }} />
            </Form.Item>
          </Col>
          <Col style={{ padding: 5, fontWeight: "bold" }}>
            <Form.Item label="Age: " name="age">
              <Input style={{ border: 0, borderBottom: "2px solid black" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col flex="auto" style={{ padding: 5, fontWeight: "bold" }}>
            <Form.Item label="Home Phone Number: " name="tel">
              <Input style={{ border: 0, borderBottom: "2px solid black" }} />
            </Form.Item>
          </Col>
          <Col flex="auto" style={{ padding: 5 }}>
            <Form.Item label="Personal Phone Number:" name="phone">
              <Input style={{ border: 0, borderBottom: "2px solid black" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col flex="auto" style={{ padding: 5, fontWeight: "bold" }}>
            <Form.Item label="Address: " name="address">
              <Input style={{ border: 0, borderBottom: "2px solid black" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row style={{ paddingBottom: 25 }}></Row>
        <Row>
          <Button
            style={{
              background: "green",
              color: "white",
              fontWeight: "bold",
              borderRadius: "5px",
              border: ".5px solid whitesmoke",
              boxShadow: "1px 5px whitesmoke",
              height: "40px",
            }}
            htmlType="submit"
            onClick={() => onFinish}
          >
            <span className="desktop-view">
              <SaveOutlined /> Save Changes
            </span>
            <span className="mobile-view">
              <SaveOutlined />
            </span>
          </Button>
        </Row>
      </Form>
    </div>
  );
};
export default inject("store")(observer(ViewUser));
