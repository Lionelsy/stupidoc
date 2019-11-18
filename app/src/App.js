import React, { Component } from "react";
import LoginPage from "./components/login/LoginPage";
import EditPage from "./components/editPage/editPage";
import SelfInformation from "./components/changeSetting/selfInformation";
import DocumentsPage from "./components/documentsPage/documentsPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
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
          <Route path="/">
            <DocumentsPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
