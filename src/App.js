import "antd/dist/antd.css";
import "./index.css";

import MainComponent from "./components/maincomponent/MainComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useContext, useEffect } from "react";

import { observer } from "mobx-react-lite";

import UserDashboard from "./views/UserDashboard";
import MyLayout from "./components/layout/MyLayout";
import ViewUserDashboard from "./views/ViewUserDashboard";
import HomeDashboard from "./views/HomeDashboard";
import AboutDashboard from "./views/AboutDashboard";

function App() {
  useEffect(() => {});
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <MainComponent
            path="/users/:id"
            layout={MyLayout}
            component={ViewUserDashboard}
          />
          <MainComponent
            path="/users"
            layout={MyLayout}
            component={UserDashboard}
          />
          <MainComponent
            path="/home"
            layout={MyLayout}
            component={HomeDashboard}
          />
          <MainComponent
            path="/about"
            layout={MyLayout}
            component={AboutDashboard}
          />
          <Route component={() => <h1>URL NOT FOUND</h1>} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
