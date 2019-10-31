import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import SideMenu from "./sideMenu";
import TopMenu from "./topMenu";
import EditArea from "./editArea";

const { Header, Footer, Sider, Content } = Layout;
var Markdown = require("react-markdown");

class EditPage extends Component {
  state = {
    theme: "dark",
    value: "## Hello World"
  };

  onChange = value => {
    console.log("new value", value);
    this.setState({ value });
  };

  render() {
    return (
      <div>
        <Layout>
          <TopMenu theme={this.state.theme} />
          <Layout>
            <Content>
              <Row>
                <Col span={3}>
                  <Sider
                    style={{
                      overflow: "auto",
                      height: "100vh",
                      position: "fixed",
                      left: 0
                    }}
                  >
                    <SideMenu />
                  </Sider>
                </Col>
                <Col span={9}>
                  <EditArea onChange={this.onChange} value={this.state.value} />
                </Col>
                <Col span={10}>
                  <Markdown source={this.state.value} />
                </Col>
              </Row>
            </Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default EditPage;
