import React, { Component } from "react";
import "./css/main.css";
import EditPage from "./components/editPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <EditPage />
      </div>
    );
  }
}

export default App;
