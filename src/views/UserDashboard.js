import React, { Suspense } from "react";
import { SyncOutlined } from "@ant-design/icons";
import { UserTable } from ".././components/usertable";
const UserDashboard = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="icons-list">
            <SyncOutlined spin />
          </div>
        }
      >
        <UserTable />
      </Suspense>
    </div>
  );
};

export default UserDashboard;
