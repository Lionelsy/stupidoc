import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { MenuItem } from "rc-menu";
import UserOption from "./userOption";

const { SubMenu } = Menu;

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
            Stupidoc
          </a>
        </Menu.Item>
        <MenuItem style={{ width: this.state.menuItemWitdh, float: "right" }}>
          <UserOption />
        </MenuItem>
      </Menu>
    );
  }
}

export default AppNavbar;
