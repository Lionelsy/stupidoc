import React, { Component } from "react";
import LoginPage from "./component/login/LoginPage";
import EditPage from "./component/editPage/editPage";
import SelfInformation from "./component/changeSetting/selfInformation";
import DocumentsPage from "./component/documentsPage/documentsPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./component/utils/storageUtils";

class App extends Component {
  state = {
    username: "",
    userId: -1, //等正式发布时设置成-1
    login: false,
    document_id: 1,
    document_type: 0
  };

  handleLogin = (userId, username) => {
    this.setState({ userId, username });
  };

  handleDocumentSelect = (document_id, document_type) => {
    this.setState({ document_id, document_type });
  };

  render() {
    const { userId, document_id, document_type } = this.state;
    return (
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage handleLogin={this.handleLogin} userId={userId} />
          </Route>
          <Route path="/edit">
            <EditPage
              userId={userId}
              document_id={document_id}
              document_type={document_type}
            />
          </Route>
          <Route path="/info">
            <SelfInformation userId={userId} />
          </Route>
          <Route path="/">
            <DocumentsPage
              userId={userId}
              document_id={document_id}
              document_type={document_type}
              handleDocumentSelect={this.handleDocumentSelect}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
