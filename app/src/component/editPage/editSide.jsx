import React, { Component } from "react";
import { Button, Menu, Icon, message, Upload } from "antd";

class EditSide extends Component {
  state = {
    objs: this.props.value
  };

  uploadProps = {
    name: "file",
    action: "/document/addObject",
    headers: {
      authorization: "authorization-text"
    },
    width: "200px",
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    }
  };

  SelectIcon = e => {
    if (e === 0) {
      return <Icon type="file-markdown" />;
    } else if (e === 1) {
      return <Icon type="picture" />;
    } else {
      return <Icon type="file-text" />;
    }
  };
  render() {
    const { value } = this.props;
    return (
      <div
        style={{
          width: "100%",
          height: this.props.height,
          top: 0,
          left: 0
        }}
      >
        <div style={{ textAlign: "center", margin: 5 }}>
          <Upload showUploadList={false}>
            <Button type="ghost" style={{ width: 200 }}>
              <Icon type="upload" />
              upload
            </Button>
          </Upload>
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="light"
          inlineCollapsed={this.props.collapsed}
        >
          {value.map(e => (
            <Menu.Item key={e.object_id}>
              {this.SelectIcon(e.object_type)}
              <span>{e.object_name}</span>
            </Menu.Item>
          ))}
        </Menu>
      </div>
    );
  }
}

export default EditSide;
