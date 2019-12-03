import React, { Component } from "react";
import { Card, Col, Row, Avatar, Icon, Typography, Input, Drawer } from "antd";
import EditCard from "./editCard";
import AllButton from "./button";
const { Meta } = Card;
const { Text } = Typography;

class DocCard extends Component {
  state = {
    documents: this.props.documents,
    appButtonWidth: "150px",
    selectedDocumentId: 4,
    selectedDoc: this.props.documents[0],
    visible: false
  };

  formatDate = date => {
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    return day + " " + monthNames[monthIndex] + " " + year;
  };

  sort_by_date = documents => {
    let result = [];
    for (let i = 0; i < documents.length; i++) {
      let doc = documents[i];
      let t = new Date(doc.createTime).getDay();
      if (!result[t]) {
        result[t] = [doc];
      } else {
        result[t].push(doc);
      }
    }
    return result;
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const selected = this.props.selected;
    const { documents } = this.state;
    if (selected === "1") {
      const sorted_documents = this.sort_by_date(documents);
      return (
        <div style={{ background: "#ffffff", position: "relative" }}>
          <Col span={20}>
            <Row>
              {sorted_documents.map(e => (
                <div key={e[0].id}>
                  <div>
                    <Text disabled>
                      {this.formatDate(new Date(e[0].createTime))}
                    </Text>
                  </div>
                  <Row>
                    {e.map(doc => (
                      <Col span={8} key={doc.id}>
                        <Card
                          style={{
                            width: "97%",
                            marginLeft: "5px",
                            marginRight: "5px",
                            marginTop: "10px",
                            marginBottom: "10px"
                          }}
                          actions={[
                            <Icon type="edit" key="edit" />,
                            <Icon
                              type="ellipsis"
                              key="ellipsis"
                              onClick={() => {
                                this.setState({
                                  visible: true,
                                  selectedDocumentId: doc.id,
                                  selectedDoc: doc
                                });
                              }}
                            />
                          ]}
                        >
                          <Meta
                            avatar={
                              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            }
                            title="Card title"
                            // description="This is the description"
                          />
                          <div style={{ marginTop: 12 }}>
                            <Input
                              style={{ border: 0 }}
                              defaultValue="This is the description"
                            />
                          </div>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
              ))}
            </Row>
          </Col>
          <Col span={4}>
            {/* <AllButton /> */}
            <AllButton />
          </Col>
          <Drawer
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <EditCard
              docid={this.state.selectedDocumentId}
              doc={this.state.selectedDoc}
            />
          </Drawer>
        </div>
      );
    }
    return <h2>Todo</h2>;
  }
}

export default DocCard;
