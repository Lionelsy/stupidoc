import React, { Component } from "react";
import { Row, Upload, Button } from "antd";
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
          <Upload width={appButtonWidth} style={{ textAlign: "center" }}>
            <Button style={{ textAlign: "center", width: appButtonWidth }}>
              Upload
            </Button>
          </Upload>
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
