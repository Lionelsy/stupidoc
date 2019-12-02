import { Menu, Dropdown, Badge, Avatar } from "antd";

import React, { Component } from "react";

const menu = (
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
    <Menu.Item key="3">Log out</Menu.Item>
  </Menu>
);

class UserOption extends Component {
  render() {
    return (
      <Dropdown overlay={menu}>
        <Badge count={1} className="ant-dropdown-link">
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </Badge>
      </Dropdown>
    );
  }
}

export default UserOption;
