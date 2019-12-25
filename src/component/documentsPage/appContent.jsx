import React, { Component } from "react";
import AppSidebar from "./appSidebar";
import DocCard from "./docCard";
import { Row, Col } from "antd";

class AppContent extends Component {
  state = {
    id: 1,
    selected: "1",
    isLoading: true,
    documents: [],
    filtered_documents: [],
    appSidebarWidth: "100%",
    appSidebarHeight: "90vh"
  };

  onChange = e => {
    this.setState({ selected: e.key });
    let temp_docs = [...this.state.documents];
    if (e.key === "1") {
      this.setState({ filtered_documents: temp_docs });
    } else if (e.key === "2") {
      this.setState({
        filtered_documents: temp_docs.filter(doc => doc.authority === 0)
      });
    } else if (e.key === "3") {
      this.setState({
        filtered_documents: temp_docs.filter(doc => doc.authority === 1)
      });
    }
  };

  async componentDidMount() {
    const response = await fetch(`/document/getAllDocInfo?user_id=12345678`);
    const body = await response.json();
    this.setState({
      isLoading: false,
      documents: body.data,
      filtered_documents: body.data
    });
  }
  render() {
    const {
      isLoading,
      selected,
      filtered_documents,
      documents,
      appSidebarHeight,
      appSidebarWidth
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
          <div style={{ marginTop: "5%", marginLeft: "2%" }}>
            <DocCard
              documents={filtered_documents}
              selected={selected}
              document_id={this.props.document_id}
              handleDocumentSelect={this.props.handleDocumentSelect}
            />
          </div>
        </Col>
      </Row>
    );
  }
}

export default AppContent;
