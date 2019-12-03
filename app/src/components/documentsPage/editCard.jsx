import React, { Component } from "react";
import { Input, Select, Icon, Button, Tag } from "antd";

class EditCard extends Component {
  state = {
    backgroundColor: "#eee",
    docid: this.props.docid,
    doc: this.props.doc
  };
  render() {
    return (
      <div
        key={this.props.docid}
        style={{
          background: this.state.backgroundColor,
          width: "16.67%",
          height: "600px",
          position: "fixed",
          top: 47,
          right: 0
        }}
      >
        {/* //title */}
        <div>
          <Input
            style={{ marginTop: 30, background: this.state.backgroundColor }}
            defaultValue="Title"
          />
        </div>
        {/* //description */}
        <div>
          <Input
            style={{
              marginTop: 30,
              marginBottom: 30,
              background: this.state.backgroundColor
            }}
            defaultValue={this.props.doc.description}
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
          <Button type="primary" style={{ width: "100%" }}>
            Invite
          </Button>
        </div>
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <Button type="danger" style={{ width: "100%" }}>
            Delete
          </Button>
        </div>
      </div>
    );
  }
}

export default EditCard;
