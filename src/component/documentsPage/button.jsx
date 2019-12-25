import React, { Component } from "react";
import { Col, Row, Affix } from "antd";
import UpLoad from "./upLoadButton";
import NewBotton from "./newBotton";

class AllButton extends Component {
  state = { appButtonWidth: "150px" };
  render() {
    const { appButtonWidth } = this.state;
    return (
      <div
        style={{
          background: "#ffffff",
          position: "fixed",
          top: "15%",
          right: "2%"
        }}
      >
        <Row type="flex" justify="space-around" align="top">
          <UpLoad width={appButtonWidth} style={{ textAlign: "center" }} />
        </Row>
        <br />
        <Row type="flex" justify="space-around" align="top">
          <NewBotton
            width={appButtonWidth}
            style={{ textAlign: "center" }}
            handleNewProject={this.props.handleNewProject}
          />
        </Row>
      </div>
    );
  }
}

export default AllButton;
