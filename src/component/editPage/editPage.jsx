import React, { Component } from "react";
import EditSide from "./editSide";
import EditNavbar from "./editNavbar";
import {
  Row,
  Col,
  Drawer,
  Timeline,
  Button,
  Divider,
  Select,
  Icon,
  Modal
} from "antd";
import EditContent from "./editContent";

const { Option } = Select;

class EditPage extends Component {
  state = {
    collapsed: false,
    height: "500px",
    value: "<h1>Hello World</h1>",
    visibleVersion: false,
    visibleToolbox: false,
    visibleDetail: false,
    document_title: "",
    versions: [],
    objects: [],
    doc_id: 20,
    version_detail: [],
    oldVersionInfo: {},
    oldVersionFiles: []
  };

  toggleCollapsed = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  onValueChange = value => {
    this.setState({ value });
  };

  onMouseDown = e => {
    var target = e.target;
    var edit = document.getElementById("edit");
    var show = document.getElementById("show");
    var maxWidth = window.innerWidth;
    var targetWidth = maxWidth * 0.007;
    document.onmousemove = function(event) {
      event.preventDefault();
      var x = event.pageX;
      if (x < 0) x = 0;
      target.style.left = x - targetWidth + "px";
      edit.style.marginRight = maxWidth - x + "px";
      show.style.width = ((maxWidth - x) / maxWidth) * 100 - 0.6 + "%";
    };
    document.onmouseup = function() {
      document.onmousemove = null;
      document.onmouseup = null;
    };
  };

  onCloseVersion = () => {
    this.setState({
      visibleVersion: false
    });
  };

  onCloseToolbox = () => {
    this.setState({
      visibleToolbox: false
    });
  };

  handleToolsVisible = () => {
    this.setState({
      visibleToolbox: true
    });
  };

  handleClick = e => {
    fetch(`/document/deleteVersion?version_id=` + parseInt(e));
    var new_versions = [...this.state.versions];
    new_versions = new_versions.filter(v => v.version_id !== e);
    this.setState({ versions: new_versions });
  };

  async componentDidMount() {
    var pro = 0;
    const res = await fetch(
      `/document/getRecentVersionInfo?document_id=` +
        parseInt(this.state.doc_id)
    );
    const body1 = await res.json();
    pro = body1.data.version_id;
    const response = await fetch(
      `/document/getObjectsDescription?version_id=` + parseInt(pro)
    );
    const body = await response.json();
    this.setState({
      objects: body.data
    });
  }

  handleGetVersion = () => {
    this.setState({
      visibleVersion: true
    });
    const doc_id = this.state.doc_id;
    fetch(`/document/getVersionsDescription?document_id=` + parseInt(doc_id))
      .then(res => res.json())
      .then(data => {
        this.setState({
          versions: data.data
        });
      });
  };

  handleGettargetVersion = e => {
    let doc_id = this.state.doc_id;
    fetch(
      `/document/rollback?document_id=` +
        parseInt(doc_id) +
        "&" +
        "version_id=" +
        e
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

  handleOk = e => {
    this.setState({
      visibleDetail: false
    });
  };

  handleCancel = e => {
    this.setState({
      visibleDetail: false
    });
  };

  showModal = e => {
    fetch(`/document/getVersionInfo?version_id=` + e)
      .then(res => res.json())
      .then(data => {
        this.setState({
          oldVersionInfo: data.data
        });
      });
    fetch(`/document/getObjectsDescription?version_id=` + e)
      .then(res => res.json())
      .then(data => {
        this.setState({
          oldVersionFiles: data.data
        });
      });
    this.setState({
      visibleDetail: true
    });
  };

  getTime = e => {
    let date = new Date(e);
    return (
      date.getFullYear() + "年" + date.getMonth() + "月" + date.getDay() + "日"
    );
  };
  render() {
    const {
      height,
      visibleVersion,
      visibleToolbox,
      versions,
      oldVersionInfo,
      oldVersionFiles,
      document_title
    } = this.state;

    console.log(this.props.userId);

    return (
      <div>
        <Modal
          title={document_title}
          visible={this.state.visibleDetail}
          handleOk={this.handleGettargetVersion(oldVersionInfo.version_id)}
          // onOk={e => this.handleGettargetVersion(oldVersionInfo.version_id)}
          okText="Roll Back"
          onCancel={this.handleCancel}
        >
          <h2>{oldVersionInfo.content_source}</h2>
          <Divider dashed />
          <h2>{this.getTime(oldVersionInfo.last_modified)}</h2>
          <Divider dashed />
          {oldVersionFiles.map(e => (
            <h3>{e.object_name}</h3>
          ))}
        </Modal>
        <Drawer
          title="Version Box"
          placement="left"
          closable={true}
          onClose={this.onCloseVersion}
          visible={visibleVersion}
        >
          <Timeline pending="Loading...">
            {versions.map(v => (
              <Timeline.Item style={{ alignItems: "center" }}>
                <Button
                  block
                  style={{ width: "90%" }}
                  key={v.version_id}
                  onClick={e => this.showModal(v.version_id)}
                >
                  {v.version_id}
                </Button>
                <Icon
                  type="delete"
                  style={{
                    verticalAlign: "center",
                    display: "inline-block",
                    textAlign: "right",
                    width: "10%"
                  }}
                  onClick={e => this.handleClick(v.version_id)}
                  key={v.version}
                />
              </Timeline.Item>
            ))}
          </Timeline>
        </Drawer>

        <Drawer
          title="Tools Box"
          placement="left"
          closable={true}
          onClose={this.onCloseToolbox}
          visible={visibleToolbox}
        >
          <Button
            block
            // type="primary"
            shape="round"
            icon="download"
            size="large"
            style={{ border: 0 }}
          >
            Download Source Code
          </Button>

          <br />
          <Divider dashed />
          <Button block icon="eye" size="large" style={{ border: 0 }}>
            Word Count
          </Button>
          <Divider dashed />
          <Col>
            <Col span={12}>
              <div style={{ marginLeft: "20%" }}>Font</div>
            </Col>
            <Col span={12}>
              <Select
                defaultValue="15px"
                style={{ width: 120, marginLeft: "0" }}
              >
                <Option value="15px">15px</Option>
                <Option value="20px">20px</Option>
                <Option value="25px">25px</Option>
                <Option value="30px">30px</Option>
              </Select>
            </Col>
          </Col>
          <br />
          <Divider dashed />
          <Col>
            <Col span={12}>
              <div style={{ marginLeft: "20%" }}>Theme</div>
            </Col>
            <Col span={12}>
              <Select
                defaultValue="Drak"
                style={{ width: 120, marginRight: "0" }}
              >
                <Option value="Dark">Dark</Option>
                <Option value="Light">Light</Option>
              </Select>
            </Col>
          </Col>
        </Drawer>

        <EditNavbar
          handleGetVersion={this.handleGetVersion}
          handleToolsVisible={this.handleToolsVisible}
        />
        <Row>
          <Col span={4} style={{ background: "#ffffff", height: height }}>
            <EditSide value={this.state.objects} />
          </Col>
          <Col span={20} style={{ background: "#090", height: height }}>
            <EditContent
              value={this.state.value}
              onValueChange={this.onValueChange}
              height={height}
              doc_id={this.state.doc_id}
              document_id={this.props.document_id}
              document_type={this.props.document_type}
              userId={this.props.userId}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default EditPage;
