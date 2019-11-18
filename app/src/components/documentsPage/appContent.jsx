import React, { Component } from "react";
import AppSidebar from "./appSidebar";
import DocCard from "./docCard";
import UpLoad from "./upLoadButton";
import NewBotton from "./newBotton";
import { Row, Col, Affix } from "antd";

class AppContent extends Component {
  state = {
    id: 1,
    selected: "1",
    isLoading: true,
    documents: [],
    appSidebarWidth: "100%",
    appSidebarHeight: "90vh",
    appButtonWidth: "150px"
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
        <Col span={18}>
          <div style={{ marginTop: 50 }}>
            <DocCard documents={documents} selected={selected} />
          </div>
        </Col>
        <Col span={3} style={{ background: "#f7f7f7" }}>
          <Affix offsetTop={60}>
            <Row type="flex" justify="space-around" align="top">
              <UpLoad width={appButtonWidth} style={{ textAlign: "center" }} />
            </Row>
          </Affix>
          <Affix offsetTop={100}>
            <Row type="flex" justify="space-around" align="top">
              <NewBotton
                width={appButtonWidth}
                style={{ textAlign: "center" }}
              />
            </Row>
          </Affix>
        </Col>
      </Row>
    );
  }
}

export default AppContent;
