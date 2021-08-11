import React, { Suspense } from "react";
import { SyncOutlined } from "@ant-design/icons";
import { Home } from ".././components/home";
const HomeDashboard = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="icons-list">
            <SyncOutlined spin />
          </div>
        }
      >
        <Home />
      </Suspense>
    </div>
  );
};

export default HomeDashboard;
