import React, { Component } from "react";
import LoginPage from "./component/login/LoginPage";
import EditPage from "./component/editPage/editPage";
import SelfInformation from "./component/changeSetting/selfInformation";
import DocumentsPage from "./component/documentsPage/documentsPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

class App extends Component {
  state = {
    username: "",
    userId: -1,
    login: false,
    document_id: 1
  };

  handleLogin = (userId, username) => {
    this.setState({ userId, username });
  };

  handleDocumentSelect = document_id => {
    console.log(document_id);
    this.setState({ document_id });
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage handleLogin={this.handleLogin} />
          </Route>
          <Route path="/edit">
            <EditPage />
          </Route>
          <Route path="/info">
            <SelfInformation />
          </Route>
          <Route path="/">
            <DocumentsPage
              document_id={this.state.document_id}
              handleDocumentSelect={this.handleDocumentSelect}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
