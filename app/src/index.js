import * as serviceWorker from "./serviceWorker";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./css/index.css";
import "./css/App.css";

import SelfInfomation from "./components/changeSetting/selfInfomation";
import DocumentsPage from "./components/documentsPage/documentsPage";
import EditPage from "./components/editPage/editPage";
import LoginPage from "./components/login/LoginPage";

ReactDOM.render(<LoginPage />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
