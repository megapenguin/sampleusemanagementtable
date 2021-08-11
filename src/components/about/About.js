import React from "react";
import { Row, Col, Typography } from "antd";

const About = () => {
  const { Title } = Typography;
  return (
    <div>
      <Row>
        <Col>
          <Title>This Is About</Title>
        </Col>
      </Row>
    </div>
  );
};

export default About;
