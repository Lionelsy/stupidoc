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
    id: 1,
    isLoading: true,
    documents: [],
    appNavbarWidth: "100%",
    appNavbarHeight: "10%",
    appSidebarWidth: "100%",
    appSidebarHeight: "90vh",
    appButtonWidth: "150px"
  };

  async componentDidMount() {
    const response = await fetch(`/api/documents`);
    const body = await response.json();
    this.setState({ isLoading: false, documents: body });
  }

  render() {
    const {
      isLoading,
      documents,
      appNavbarHeight,
      appNavbarWidth,
      appSidebarHeight,
      appSidebarWidth,
      appButtonWidth
    } = this.state;
    if (isLoading) {
      return <h2>Loading...</h2>;
    }
    return (
      <div>
        <AppNavbar width={appNavbarWidth} height={appNavbarHeight} />
        <Row>
          <Col span={3}>
            <AppSidebar
              width={appSidebarWidth}
              height={appSidebarHeight}
              documents={documents}
            />
          </Col>
          <Col span={18}>
            <DocCard documents={documents} />
          </Col>
          <div style={{ textAlign: "center" }}>
            <Col span={3}>
              <UpLoad width={appButtonWidth} />
              <NewBotton width={appButtonWidth} />
            </Col>
          </div>
        </Row>
      </div>
    );
  }
}

export default App;
