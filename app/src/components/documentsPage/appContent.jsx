import React, { Component } from "react";
import AppSidebar from "./appSidebar";
import DocCard from "./docCard";
import { Row, Col, Affix } from "antd";

class AppContent extends Component {
  state = {
    id: 1,
    selected: "1",
    isLoading: true,
    documents: [],
    appSidebarWidth: "100%",
    appSidebarHeight: "90vh"
  };

  onChange = e => {
    this.setState({ selected: e.key });
  };

  async componentDidMount() {
    const response = await fetch(`/api/documents`);
    const body = await response.json();
    this.setState({ isLoading: false, documents: body });
  }
  render() {
    const {
      isLoading,
      selected,
      documents,
      appSidebarHeight,
      appSidebarWidth,
      appButtonWidth
    } = this.state;
    if (isLoading) {
      return <h2>Loading...</h2>;
    }
    return (
      <Row>
        <Col span={3}>
          <div
            style={{
              position: "fixed",
              zIndex: 1,
              marginTop: 50,
              overflow: "auto",
              width: "12.5%"
            }}
          >
            <AppSidebar
              width={appSidebarWidth}
              height={appSidebarHeight}
              documents={documents}
              selected={selected}
              onChange={this.onChange}
            />
          </div>
        </Col>
        <Col span={21}>
          <div style={{ marginTop: 50 }}>
            <DocCard documents={documents} selected={selected} />
          </div>
        </Col>
      </Row>
    );
  }
}

export default AppContent;
