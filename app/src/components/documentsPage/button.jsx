import React, { Component } from "react";
import { Col, Row, Affix } from "antd";
import UpLoad from "./upLoadButton";
import NewBotton from "./newBotton";

class AllButton extends Component {
  state = { appButtonWidth: "150px" };
  render() {
    return (
      <div
        style={{ background: "#ffffff", position: "fixed", top: 60, right: 0 }}
      >
        <Row type="flex" justify="space-around" align="top">
          <UpLoad width={this.appButtonWidth} style={{ textAlign: "center" }} />
        </Row>
        <br />
        <Row type="flex" justify="space-around" align="top">
          <NewBotton
            width={this.appButtonWidth}
            style={{ textAlign: "center" }}
          />
        </Row>
      </div>
    );
  }
}

export default AllButton;
