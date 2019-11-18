import AppNavbar from "../appNavbar";
import AppContent from "./appContent";

import React, { Component } from "react";

class DocumentsPage extends Component {
  state = { appNavbarWidth: "100%", appNavbarHeight: "10%" };
  render() {
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
          <AppContent />
        </div>
      </div>
    );
  }
}

export default DocumentsPage;
