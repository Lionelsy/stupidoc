import React, { Component } from "react";
import { Card, Col, Row, Skeleton, Avatar, Icon } from "antd";

const { Meta } = Card;

class DocCard extends Component {
  state = { documents: this.props.documents };
  render() {
    const { documents } = this.state;

    return (
      <div style={{ background: "#ECECEC", padding: "30px" }}>
        <Row>
          {documents.map(doc => (
            <Col span={12}>
              <Card
                style={{ width: "90%", margin: "20px" }}
                actions={[
                  <Icon type="setting" key="setting" />,
                  <Icon type="edit" key="edit" />,
                  <Icon type="ellipsis" key="ellipsis" />
                ]}
              >
                <Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title="Card title"
                  description="This is the description"
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default DocCard;
