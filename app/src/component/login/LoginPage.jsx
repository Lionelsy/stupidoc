import React, { Component } from "react";
import { Card, Col, Row, Icon } from "antd";
import WrappedNormalLoginForm from "./wrappedNormalLoginForm";
import pic from "./img/logo.png";
import ReactCanvasNest from "react-canvas-nest";
import { Redirect } from "react-router-dom";

class LoginPage extends Component {
  render() {
    console.log(this.props.userId);
    if (this.props.userId !== -1) {
      return <Redirect to="/" />;
    } else {
      return (
        <div>
          <ReactCanvasNest
            className="canvasNest"
            style={{ height: window.innerHeight, width: window.innerWidth }}
            config={{
              pointColor: " 114, 114, 114 ",
              pointOpacity: "0.5",
              lineWidth: "1",
              zIndex: 10,
              follow: false
            }}
          />
          <br />
          <br />
          <Row>
            <Col span={8} offset={8}>
              <div style={{ textAlign: "center" }}>
                <img
                  src={pic}
                  style={{ width: "20%" }}
                  alt="Southern University of Science and Technology"
                ></img>
              </div>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
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
                  background: "#f7f7f7"
                }}
              >
                <WrappedNormalLoginForm handleLogin={this.props.handleLogin} />
              </Card>
            </Col>
          </Row>
        </div>
      );
    }
  }
}

export default LoginPage;
