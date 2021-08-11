import React, { Suspense } from "react";
import { SyncOutlined } from "@ant-design/icons";
import { About } from ".././components/about";
const AboutDashboard = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="icons-list">
            <SyncOutlined spin />
          </div>
        }
      >
        <About />
      </Suspense>
    </div>
  );
};

export default AboutDashboard;
