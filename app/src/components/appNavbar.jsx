import React, { Component } from "react";
import { Menu, Icon, Input } from "antd";
import { MenuItem } from "rc-menu";
import UserOption from "./documentsPage/userOption";

const { SubMenu } = Menu;
const { Search } = Input;

class AppNavbar extends Component {
  state = { menuItemWitdh: "150" };

  render() {
    return (
      <Menu
        mode="horizontal"
        style={{ width: this.props.width, height: this.props.height }}
      >
        <Menu.Item key="home">
          <a href="/">
            <Icon type="home" />
            SUSTechDoc
          </a>
        </Menu.Item>
        <SubMenu></SubMenu>
        <MenuItem style={{ width: this.state.menuItemWitdh, float: "right" }}>
          <UserOption />
        </MenuItem>
        <Menu.Item style={{ width: this.state.menuItemWitdh, float: "right" }}>
          <Search
            placeholder="Search Files"
            onSearch={value => console.log(value)}
          />
        </Menu.Item>
      </Menu>
    );
  }
}

export default AppNavbar;
