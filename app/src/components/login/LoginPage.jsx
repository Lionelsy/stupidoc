import React, { Component } from "react";
import { Card, Col, Row, Form, Icon, Input, Button, Checkbox } from "antd";
import ReactDOM from "react-dom";
import WrappedNormalLoginForm from "./login";
import pic from "./img/logo.png";
class LoginPage extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <Row style={{}}>
          <Col span={8} offset={8}>
            <div style={{ textAlign: "center" }}>
              <img src={pic} style={{ width: "20%" }}></img>
            </div>
          </Col>
        </Row>
        {/* <Row style={{}}>
          <Col span={6} offset={9}>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "75px" }}>Stupidoc</p>
            </div>
          </Col>
        </Row> */}
        <br />
        <br />
        <Row style={{}}>
          <Col span={6} offset={9}>
            <Card
              title={
                <span style={{ fontSize: "30px" }}>
                  <Icon
                    type="check-circle"
                    theme="twoTone"
                    twoToneColor="#52c41a"
                  />
                  Stupidoc
                </span>
              }
              hoverable="true"
              bordered="true"
              style={{
                background: "#f8f8f8"
              }}
            >
              <WrappedNormalLoginForm />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LoginPage;
