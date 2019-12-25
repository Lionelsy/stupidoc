import React, { Component } from "react";

import { Menu, Icon } from "antd";

class AppSidebar extends Component {
  state = {
    selected: this.props.selected,
    documents: this.props.documents
  };

  render() {
    return (
      <Menu
        onClick={this.props.onChange}
        style={{
          width: this.props.width,
          height: this.props.height,
          margin: 0
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <Menu.Item key="1">
          <Icon type="file" />
          All file
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="user" />
          Created
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="usergroup-delete" />
          Joined
        </Menu.Item>
      </Menu>
    );
  }
}

export default AppSidebar;
