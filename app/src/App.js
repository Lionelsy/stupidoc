import AppNavbar from "./components/appNavbar";
import AppContent from "./components/appContent";

import React, { Component } from "react";

class App extends Component {
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

export default App;
