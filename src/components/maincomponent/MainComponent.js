import React from "react";
import { Route, withRouter } from "react-router-dom";

function MainComponent({ layout: Layout, component: Component, res }) {
  return (
    <Route
      {...res}
      render={(props) => (
        <Layout>
          <Component />
        </Layout>
      )}
    ></Route>
  );
}

export default withRouter(MainComponent);
