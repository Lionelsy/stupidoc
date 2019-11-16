import React, { Component } from "react";

import { Menu, Icon } from "antd";

const { SubMenu } = Menu;

class AppSidebar extends React.Component {
  state = {
    documents: this.props.documents
  };

  handleClick = e => {
    console.log("click ", e);
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
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
          <Icon type="carry-out" /> Recent
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="heart" /> Favor
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="user" />
          Created
        </Menu.Item>
        <Menu.Item key="5">
          <Icon type="usergroup-delete" />
          Joined
        </Menu.Item>
        <Menu.Item key="6">
          <Icon type="usergroup-delete" />
          Joined
        </Menu.Item>
        <Menu.Item key="7">
          <Icon type="usergroup-delete" />
          Joined
        </Menu.Item>
        <Menu.Item key="8">
          <Icon type="usergroup-delete" />
          Joined
        </Menu.Item>

        {/* <Menu.Item key="9">
          <Icon type="usergroup-delete" />
          Joined
        </Menu.Item>
        <Menu.Item key="10">
          <Icon type="usergroup-delete" />
          Joined
        </Menu.Item>
        <Menu.Item key="11">
          <Icon type="usergroup-delete" />
          Joined
        </Menu.Item>
        <Menu.Item key="12">
          <Icon type="usergroup-delete" />
          Joined
        </Menu.Item> */}
      </Menu>
    );
  }
}

export default AppSidebar;
