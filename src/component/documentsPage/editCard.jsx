import React, { Component } from "react";
import { Input, Icon, Button, Tag, message } from "antd";
import copy from "copy-to-clipboard";

class EditCard extends Component {
  state = {
    backgroundColor: "#ffffff",
    docid: this.props.docid,
    doc: this.props.doc,
    showLoading: false
  };

  handleInviteRead = () => {
    message.success("Copy the invited link successfully");
    fetch(
      "/document/read/generateShareLink?document_id=" +
        this.props.docid +
        "&cooperator_id=" +
        "12345"
    )
      .then(res => res.json())
      .then(data => copy(data.data.readShareLink));
  };

  handleInviteWrite = () => {
    message.success("Copy the invited link successfully");
    fetch(
      "/document/read/generateShareLink?document_id=" +
        this.props.docid +
        "&cooperator_id=" +
        "12345"
    )
      .then(res => res.json())
      .then(data => copy(data.data.writeShareLink));
  };

  handleDelete = () => {
    this.setState({ showLoading: true });
    fetch("/document/deleteDoc?document_id=" + this.props.docid)
      .then(res => res.json())
      .then(data => {
        if (data.code === 0) {
          window.location.reload();
        }
      });
  };

  handleConfirm = () => {
    let doc = this.props.doc;
    let title = this.refs.title.state.value;
    let desc = this.refs.desc.state.value;
    doc.document_title = title;
    doc.description = desc;
    this.setState({ showLoading: true });
    fetch("/document/modifyDocInfo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(doc)
    })
      .then(res => res.json())
      .then(window.location.reload());
  };

  render() {
    const { showLoading } = this.state;
    return (
      <div
        key={this.props.docid}
        style={{
          background: this.state.backgroundColor
        }}
      >
        <div>
          <Input
            style={{ marginTop: 30, background: this.state.backgroundColor }}
            defaultValue={this.props.doc.document_title}
            ref="title"
          />
        </div>
        <div>
          <Input
            style={{
              marginTop: 30,
              marginBottom: 30,
              background: this.state.backgroundColor
            }}
            defaultValue={this.props.doc.description}
            ref="desc"
          />
        </div>
        <div>
          <Tag closable onClose={() => this.setState({ visible: false })}>
            Yao Xinghe
          </Tag>
          <Tag closable onClose={() => this.setState({ visible: false })}>
            Zhang Shu
          </Tag>
          <Tag closable onClose={() => this.setState({ visible: false })}>
            James
          </Tag>
        </div>
        <div style={{ textAlign: "center", marginTop: 30 }}>
          <Button
            type="ghost"
            style={{ width: "100%" }}
            onClick={this.handleInviteRead}
          >
            Invite (Read only)
          </Button>
        </div>
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <Button
            type="ghost"
            style={{ width: "100%" }}
            onClick={this.handleInviteWrite}
          >
            Invite (Read Write)
          </Button>
        </div>
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <Button
            type="primary"
            style={{ width: "100%" }}
            onClick={this.handleConfirm}
          >
            Confirm
          </Button>
        </div>
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <Button
            type="danger"
            style={{ width: "100%" }}
            onClick={this.handleDelete}
          >
            Delete
          </Button>
        </div>
        <div
          style={{
            float: "right",
            marginTop: 10,
            visibility: showLoading ? "visible" : "hidden"
          }}
        >
          <Icon type="loading" />
        </div>
      </div>
    );
  }
}

export default EditCard;
