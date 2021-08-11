import React, { Suspense } from "react";
import { SyncOutlined } from "@ant-design/icons";
import { ViewUser } from ".././components/viewuser";
const ViewUserDashboard = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="icons-list">
            <SyncOutlined spin />
          </div>
        }
      >
        <ViewUser />
      </Suspense>
    </div>
  );
};

export default ViewUserDashboard;
