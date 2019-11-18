import React, { Component } from "react";
import { Row, Col, Typography } from "antd";

const { Text } = Typography;

class AppFooter extends Component {
  state = {};
  render() {
    return (
      <Row type="flex" justify="center" align="middle">
        <Col>
          <div>
            <Text disabled>SUSTech Doc ©2019 Created by Xinghe Yao</Text>
          </div>
        </Col>
      </Row>
    );
  }
}

export default AppFooter;
