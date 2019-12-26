import React, { Component } from "react";
import { Button, Menu, Icon, Row, Col } from "antd";

const { SubMenu } = Menu;

class EditSide extends Component {
  state = {
    objs: this.props.value
  };

  SelectIcon = e => {
    if (e === 0) {
      return <Icon type="file-markdown" />;
    } else if (e === 1) {
      return <Icon type="picture" />;
    } else {
      return <Icon type="file-text" />;
    }
  };
  render() {
    console.log(this.props.value);
    const { value } = this.props;
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
          {value.map(e => (
            <Menu.Item key={e.object_id}>
              {this.SelectIcon(e.object_type)}
              <span>{e.object_name}</span>
            </Menu.Item>
          ))}
        </Menu>
      </div>
    );
  }
}

export default EditSide;
