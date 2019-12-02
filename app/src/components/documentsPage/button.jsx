import React, { Component } from "react";
import { Col, Row, Affix } from "antd";
import UpLoad from "./upLoadButton";
import NewBotton from "./newBotton";

class Button extends Component {
  state = { appButtonWidth: "150px" };
  render() {
    return (
      <div style={{ background: "#ffffff" }}>
        <Affix offsetTop={60}>
          <Row type="flex" justify="space-around" align="top">
            <UpLoad
              width={this.appButtonWidth}
              style={{ textAlign: "center" }}
            />
          </Row>
        </Affix>
        <br />
        <Affix offsetTop={100}>
          <Row type="flex" justify="space-around" align="top">
            <NewBotton
              width={this.appButtonWidth}
              style={{ textAlign: "center" }}
            />
          </Row>
        </Affix>
      </div>
    );
  }
}

export default Button;
