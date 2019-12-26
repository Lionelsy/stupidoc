import React, { Component } from "react";
import { Card, Col, Row, Icon, Typography, Input, Drawer, Modal } from "antd";
import EditCard from "./editCard";
import AllButton from "./button";
import { Link } from "react-router-dom";
const { Meta } = Card;
const { Text } = Typography;

const monthNames = [
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

class DocCard extends Component {
  state = {
    documents: this.props.documents,
    appButtonWidth: "150px",
    document_id: this.props.document_id,
    // document_type:
    selectedDoc: this.props.documents[0],
    visible: false,
    clicked: false,
    new_project_visible: false,
    title: "LaTex",
    loading: false
  };

  formatDate = date => {
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    return day + " " + monthNames[monthIndex] + " " + year;
  };

  sort_by_date = documents => {
    let result = [];
    for (let i = 0; i < documents.length; i++) {
      let doc = documents[i];
      let date = new Date(doc.last_modified);
      let t = date.getFullYear() + date.getMonth() + date.getDay();
      if (!result[t]) {
        result[t] = [doc];
      } else {
        result[t].push(doc);
      }
    }
    return result.reverse();
  };

  sort_by_authority = (documents, authority) => {
    let res = [];
    for (let doc in documents) {
      if (documents[doc].authority === authority) {
        res.push(documents[doc]);
      }
    }
    return res;
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  handleCancel = () => {
    this.setState({ new_project_visible: false });
  };

  handleNewProject = title => {
    if (title) this.setState({ title });
    this.setState({ new_project_visible: true });
  };

  handleOk = () => {
    this.setState({ loading: !this.state.loading });
    let newTitle = this.refs.newTitle;
    let newDesc = this.refs.newDesc;
    let tmp = {
      user_id: 12345678,
      document: {
        document_title: newTitle.state.value,
        document_type: 1,
        description: newDesc.state.value,
        create_time: new Date().getTime()
      }
    };
    fetch("/document/addNewDocument", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tmp)
    })
      .then(res => res.json())
      .then(data => {
        let msg = data.msg;
        if (msg === "Successfully") {
          window.location.reload();
        }
      });
  };

  render() {
    const { new_project_visible } = this.state;
    return (
      <div style={{ background: "#ffffff", position: "relative" }}>
        <Modal
          title={"Make a " + this.state.title + " project"}
          visible={new_project_visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Input
            style={{
              marginTop: 10,
              marginBottom: 20,
              background: this.state.backgroundColor
            }}
            placeholder="请输入项目名称"
            ref="newTitle"
          />
          <Input
            style={{
              marginTop: 10,
              marginBottom: 20,
              background: this.state.backgroundColor
            }}
            placeholder="请输入项目描述"
            ref="newDesc"
          />
          <Icon
            type="loading"
            style={{ visibility: this.state.loading ? "visible" : "hidden" }}
          />
        </Modal>
        <Col span={20}>
          <Row>
            {this.sort_by_date(this.props.documents).map(e => (
              <div key={e[0].document_id}>
                <div>
                  <Text disabled>
                    {this.formatDate(new Date(e[0].last_modified))}
                  </Text>
                </div>
                <Row>
                  {e.map(doc => (
                    <Col span={8} key={doc.document_id}>
                      <Card
                        style={{
                          width: "97%",
                          marginLeft: "5px",
                          marginRight: "5px",
                          marginTop: "10px",
                          marginBottom: "10px"
                        }}
                        actions={[
                          <Link
                            to="/edit"
                            onClick={e =>
                              this.props.handleDocumentSelect(
                                doc.document_id,
                                doc.document_type
                              )
                            }
                          >
                            <Icon type="edit" key="edit" />
                          </Link>,
                          <Icon
                            type="ellipsis"
                            key="ellipsis"
                            onClick={() => {
                              this.setState({
                                visible: true,
                                document_id: doc.document_id,
                                selectedDoc: doc
                              });
                            }}
                          />
                        ]}
                      >
                        <Icon
                          style={{ float: "left", marginRight: 5 }}
                          type={
                            doc.document_type === 0
                              ? "file-markdown"
                              : "file-text"
                          }
                        />
                        <Meta
                          title={doc.document_title}
                          style={{ float: "left" }}
                        />
                        <div style={{ marginTop: 12 }}>
                          <Input
                            style={{ border: 0 }}
                            defaultValue={doc.description}
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
          <AllButton handleNewProject={this.handleNewProject} />
        </Col>
        <Drawer
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <EditCard
            docid={this.props.document_id}
            document_type={this.props.document_type}
            doc={this.state.selectedDoc}
          />
        </Drawer>
      </div>
    );
  }
}

export default DocCard;
