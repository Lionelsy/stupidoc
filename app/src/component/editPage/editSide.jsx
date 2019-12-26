import React, { Component } from "react";
import { Button, Menu, Icon, Row, Col } from "antd";

const { SubMenu } = Menu;

class EditSide extends Component {
  state = {
    objs: this.props.value
  };

  render() {
    {
      console.log(this.props.value);
    }

    return (
      <div
        style={{
          width: "100%",
          height: this.props.height,
          top: 0,
          left: 0
        }}
      >
        <div>
          <div>
            <Button block>Upload a file</Button>
          </div>
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="light"
          inlineCollapsed={this.props.collapsed}
        >
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>Option 3</span>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default EditSide;
