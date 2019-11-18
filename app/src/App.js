import DocumentsPage from "./components/documentsPage/documentsPage";
import AppContent from "./components/editPage/editPage";
import React, { Component } from "react";
import LoginPage from "./components/login/LoginPage";

class App extends Component {
  render() {
    return (
      <div>
        <LoginPage />
      </div>
    );
  }
}

export default App;
