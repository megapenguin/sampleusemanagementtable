import React from "react";
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

const Home = () => {
  const { Title } = Typography;
  return (
    <div>
      <Row>
        <Col>
          <Title>This Is Home</Title>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
