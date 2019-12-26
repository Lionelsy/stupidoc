import AppNavbar from "../common/appNavbar";
import AppContent from "./appContent";

import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class DocumentsPage extends Component {
  state = { appNavbarWidth: "100%", appNavbarHeight: "10%" };
  render() {
    if (this.props.userId === -1) {
      return <Redirect to="/login" />;
    }
    const { appNavbarWidth, appNavbarHeight } = this.state;
    return (
      <div>
        <div
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            background: "#f7f7f7"
          }}
        >
          <AppNavbar width={appNavbarWidth} height={appNavbarHeight} />
        </div>
        <div>
          <AppContent
            document_id={this.props.document_id}
            document_type={this.props.document_type}
            handleDocumentSelect={this.props.handleDocumentSelect}
          />
        </div>
      </div>
    );
  }
}

export default DocumentsPage;
