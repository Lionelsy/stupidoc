import { Menu, Icon } from "antd";
import React, { Component } from "react";

const { SubMenu } = Menu;

class SideMenu extends Component {
  state = {
    selected: this.props.selected,
    theme: this.props.theme,
    folder: this.props.folder,
    collapsed: false,
    value: undefined
  };

  toggle = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  buildSideBar = folder => {
    if (!folder.folders && !folder.documents) {
      return undefined;
    }
    return folder.documents
      .map(doc => (
        <Menu.Item key={doc.id}>
          <Icon type="file-markdown" />
          {doc.title}
        </Menu.Item>
      ))
      .concat(
        folder.folders.map(new_folder => (
          <SubMenu
            key={new_folder.id}
            title={
              <span>
                <Icon type="folder" />
                <span>{new_folder.folderName}</span>
              </span>
            }
          >
            {this.buildSideBar(new_folder)}
          </SubMenu>
        ))
      );
  };

  render() {
    return (
      <Menu
        mode="inline"
        onClick={this.props.handleClick}
        selectedKeys={[this.state.selected]}
        theme={this.state.theme}
        inlineCollapsed={this.state.collapsed}
        style={{ height: this.props.height, width: this.props.width }}
      >
        {this.buildSideBar(this.state.folder)}
      </Menu>
    );
  }
}

export default SideMenu;
