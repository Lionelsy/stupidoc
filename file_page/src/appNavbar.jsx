import React, { Component } from "react";
import { Menu, Icon, Input, Button, Avatar, Badge, Dropdown } from "antd";
import { MenuItem } from "rc-menu";

const { SubMenu } = Menu;
const { Search } = Input;

const userOptions = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        个人信息
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        修改密码
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        注销
      </a>
    </Menu.Item>
  </Menu>
);

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
          <Dropdown overlay={userOptions}>
            <Badge count={1}>
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </Badge>
          </Dropdown>
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
