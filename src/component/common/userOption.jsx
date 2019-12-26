import { Menu, Dropdown, Badge, Avatar } from "antd";

import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class UserOption extends Component {
  handleLogout = () => {
    fetch("/user/logout").then(res => window.location.reload());
  };

  menu = (
    <Menu>
      <Menu.Item key="0">
        <a
          // target="_blank"
          rel="noopener noreferrer"
          href="http://127.0.0.1:3000/info"
        >
          Personal Infomation
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1" disabled>
        <a
          // target="_blank"
          rel="noopener noreferrer"
          href="http://127.0.0.1:3000/info"
        >
          Change password
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" onClick={this.handleLogout}>
        Log out
      </Menu.Item>
    </Menu>
  );
  render() {
    return (
      <Dropdown overlay={this.menu}>
        <Badge count={1} className="ant-dropdown-link">
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </Badge>
      </Dropdown>
    );
  }
}

export default UserOption;
