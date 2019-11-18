import React, { Component } from "react";
import { Row, Col } from "antd";
import SideMenu from "./sideMenu";
import EditArea from "./editArea";
import ContentShow from "./contentShow";

class AppContent extends Component {
  state = {
    sideMenuHeight: "80vh",
    sideMenuWidth: "100%",
    theme: "light",
    value: "",
    height: "90vh",
    bottom: 0,
    isLoading: true,
    folder: null,
    selected: 2
  };

  onChange = value => {
    this.setState({ value });
  };

  handleClick = e => {
    this.setState({ value: "# Loading..." });
    fetch(`/api/document/${e.key}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ value: data.content || "" });
      });
  };

  async componentDidMount() {
    const response = await fetch("/api/document/1");
    const body = await response.json();
    const tmp = await fetch("/api/folder/10");
    const folder = await tmp.json();
    this.setState({
      value: body.content,
      isLoading: false,
      folder: folder
    });
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <h2>Loading...</h2>;
    }
    return (
      <Row>
        <Col span={4}>
          <div
            style={{
              position: "fixed",
              zIndex: 1,
              marginTop: 50,
              overflow: "auto",
              width: "12.5%"
            }}
          >
            <SideMenu
              height={this.state.sideMenuHeight}
              width={this.state.sideMenuWidth}
              folder={this.state.folder}
              handleClick={this.handleClick}
              selected={this.state.selected}
            />
          </div>
        </Col>
        <Col span={10}>
          <div style={{ marginTop: 50 }}>
            <EditArea
              onChange={this.onChange}
              value={this.state.value}
              height={this.state.height}
              disabled
            />
          </div>
        </Col>
        <Col span={10}>
          <div
            style={{
              marginTop: 50,
              height: this.state.height,
              overflow: "auto"
            }}
          >
            <ContentShow value={this.state.value} />
          </div>
        </Col>
      </Row>
    );
  }
}

export default AppContent;
