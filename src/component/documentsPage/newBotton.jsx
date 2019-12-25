import React, { Component } from "react";
import { Button, Menu, Dropdown, Icon } from "antd";

class NewBotton extends Component {
  render() {
    return (
      <div>
        <Dropdown
          overlay={
            <Menu onClick={e => this.props.handleNewProject(e.key)}>
              <Menu.Item key="Markdown">Markdown</Menu.Item>
              <Menu.Item key="LaTex">Latex</Menu.Item>
            </Menu>
          }
        >
          <Button
            type="primary"
            style={{ width: this.props.width }}
            onClick={e => this.props.handleNewProject("LaTex")}
          >
            New project <Icon type="down" />
          </Button>
        </Dropdown>
      </div>
    );
  }
}

export default NewBotton;
