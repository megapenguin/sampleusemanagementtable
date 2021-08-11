import React, { useEffect } from "react";
import { Table, Button, Divider, Typography, Popconfirm, Col, Row } from "antd";
import { Link } from "react-router-dom";
import {
  OrderedListOutlined,
  UsergroupAddOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import AddUserModal from "./AddUserModal";
import { inject, observer } from "mobx-react";

const UserTable = ({ store }) => {
  const { Title } = Typography;

  useEffect(() => {
    store.fetchUserList();
  }, []);

  const deleteById = (id) => {
    console.log("delete", id);
    store.deleteUser(id);
  };
  const cancel = () => {};
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, row, index) => {
        if (index < 100) {
          return <a>{text}</a>;
        }
      },
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Home/Personal Phone Numbers",
      colSpan: 2,
      dataIndex: "tel",
    },
    {
      title: "Phone",
      colSpan: 0,
      dataIndex: "phone",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Actions",
      render: (item, record) => (
        <>
          <Row>
            <Col flex="auto">
              <Link to={`/users/${item.id}`}>
                <Button
                  type="primary"
                  style={{
                    background: "#096dd9",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "5px",

                    boxShadow: "1px 5px whitesmoke",
                    height: "40px",
                  }}
                >
                  <span className="desktop-view">
                    <OrderedListOutlined /> Details
                  </span>
                  <span className="mobile-view">
                    <OrderedListOutlined />
                  </span>
                </Button>
              </Link>
            </Col>
            <Col flex="auto">
              <Button
                style={{
                  color: "red",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  height: "40px",
                }}
                danger
              >
                <Popconfirm
                  title="Are you sure to delete this user?"
                  onConfirm={() => deleteById(item.id)}
                  onCancel={() => cancel()}
                  okText="Yes"
                  cancelText="No"
                >
                  <span className="desktop-view">
                    <DeleteOutlined /> Delete
                  </span>
                  <span className="mobile-view">
                    <DeleteOutlined />
                  </span>
                </Popconfirm>
              </Button>
            </Col>
          </Row>
        </>
      ),
    },
  ];

  return (
    <div>
      <Row style={{ marginBottom: "10px" }}>
        <AddUserModal />
      </Row>
      <Divider>
        <Title level={1}>
          <UsergroupAddOutlined />
          User List
        </Title>
      </Divider>
      <Table columns={columns} dataSource={store.users.toJSON()} bordered />
    </div>
  );
};

export default inject("store")(observer(UserTable));
