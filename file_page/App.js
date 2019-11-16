import React, { Component } from "react";
import AppNavbar from "./appNavbar";
import AppSidebar from "./appSidebar";
import DocCard from "./docCard";
import { Layout, Row, Col } from "antd";
import UpLoad from "./upLoadButton";
import NewBotton from "./newBotton";
const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  state = {
    appNavbarWidth: "100%",
    appNavbarHeight: "10%",
    appSidebarWidth: "100%",
    appSidebarHeight: "90vh"
  };

  render() {
    return (
      <div>
        <AppNavbar
          width={this.state.appNavbarWidth}
          height={this.state.appNavbarHeight}
        />
        <Row>
          <Col span={3}>
            <AppSidebar
              width={this.state.appSidebarWidth}
              height={this.state.appSidebarHeight}
            />
          </Col>
          <Col span={18}>
            <DocCard />
          </Col>
          <div style={{textAlign:"center"}}>
          <Col span={3}>
            <UpLoad />
            <NewBotton />
          </Col>
          </div>
        </Row>
      </div>
    );
  }
}

export default App;
