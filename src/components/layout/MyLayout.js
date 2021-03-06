import React from "react";
import { Layout, Menu, Breadcrumb, Image } from "antd";
import Logo from "./guava.jpg";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const MyLayout = ({ children }) => {
  return (
    <div>
      <Layout className="layout">
        <Header style={{ background: "#1f1f1f" }}>
          <div className="logo">
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[]}
              style={{
                background: "#1f1f1f",
                color: "white",
                fontWeight: "bold",
              }}
            >
              <Menu.Item key="1">
                <Link to="/home">Home</Link>
              </Menu.Item>

              <Menu.Item key="2">
                <Link to="/users">Users </Link>
              </Menu.Item>

              <Menu.Item key="3">
                <Link to="/about">About</Link>
              </Menu.Item>
            </Menu>
          </div>
        </Header>
        <Content style={{ padding: "20px" }}>
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <div className="site-layout-content">{children}</div>
        </Content>
        <Footer style={{ textAlign: "center", color: "black" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
};

export default MyLayout;
