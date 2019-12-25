import React, { Component } from "react";
import { Button, Menu, Icon } from "antd";
import { Resizable, ResizableBox } from "Resizable";
class EditNavbar extends Component {
  state = {};

  render() {
    const width = window.innerWidth;
    return (
      <div
        style={{
          background: "#ddd",
          position: "relative"
        }}
      >
        <Menu mode="horizontal">
          <Menu.Item key="option" style={{ width: "10%" }}>
            <Button block>
              <Icon type="unordered-list" />
              option
            </Button>
          </Menu.Item>
          <Menu.Item key="version" style={{ width: "10%" }}>
            {/* <Button block>
              <Icon type="unordered-list" style={{ marginRight: 0 }} />
              <span>version</span>
            </Button> */}
            <Button type="primary" icon="book">
              version
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

export default EditNavbar;
