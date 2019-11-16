import React, { Component } from "react";
import { Card, Col, Row } from "antd";

class DocCard extends Component {
  state = { documents: this.props.documents };
  render() {
    const { documents } = this.state;

    return (
      <div style={{ background: "#ECECEC", padding: "30px" }}>
        <Row gutter={18}>
          {documents.map(doc => (
            <Col span={8}>
              <Card
                title="Card title"
                bordered={false}
                key={doc.id}
                style={{ margin: "10px" }}
              >
                {doc.title}}
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default DocCard;
