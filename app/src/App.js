import React, { Component } from "react";
import LoginPage from "./components/login/LoginPage";
import EditPage from "./components/editPage/editPage";
import SelfInformation from "./components/changeSetting/selfInformation";
import DocumentsPage from "./components/documentsPage/documentsPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Test from "./components/test/test";

class App extends Component {
  state = {
    username: "",
    userId: -1,
    login: false
  };
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/edit">
            <EditPage />
          </Route>
          <Route path="/info">
            <SelfInformation />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/">
            <DocumentsPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
