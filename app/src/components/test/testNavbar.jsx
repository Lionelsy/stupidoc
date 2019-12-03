import React, { Component } from "react";
import { Button, Menu, Icon } from "antd";
class TestNavbar extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          background: "#ddd",
          position: "relative"
        }}
      >
        <Menu mode="horizontal">
          <Menu.Item key="option">
            <Button>
              <Icon type="unordered-list" style={{ marginRight: 0 }} />
              <span>option</span>
            </Button>
          </Menu.Item>
          <Menu.Item style={{ position: "absolute", margin: "0 50% 0 35%" }}>
            <a href="/">SUSTechDoc</a>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default TestNavbar;
