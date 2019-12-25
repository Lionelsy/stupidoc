import React, { Component } from "react";
import EditSide from "./editSide";
import EditNavbar from "./editNavbar";
import { Row, Col, Drawer, Timeline, Button, Divider, Select } from "antd";
import EditContent from "./editContent";

const { Option } = Select;
class EditPage extends Component {
  state = {
    collapsed: false,
    height: "500px",
    value: "<h1>Hello World</h1>",
    visibleVersion: false,
    visibleToolbox: false
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

  render() {
    const { height } = this.state;
    console.log(this.props.document_id);
    return (
      <div>
        <Drawer
          title="Version Box"
          placement="left"
          closable={true}
          onClose={this.onCloseVersion}
          visible={true}
          // visible={this.state.visibleVersion}
        >
          <Timeline pending="Recording...">
            <Timeline.Item>
              <Button block>2019-1-10</Button>
            </Timeline.Item>
            <Timeline.Item>
              <Button block>2019-7-9</Button>
            </Timeline.Item>
            <Timeline.Item>
              <Button block>2019-10-9</Button>
            </Timeline.Item>
          </Timeline>
        </Drawer>

        <Drawer
          title="Tools Box"
          placement="left"
          closable={true}
          onClose={this.onCloseVersion}
          // visible={this.state.visible}
          visible={false}
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
          value={(this.state.visibleVersion, this.state.visibleToolbox)}
        />
        <Row>
          <Col span={4} style={{ background: "#900", height: height }}>
            <EditSide />
          </Col>
          <Col span={20} style={{ background: "#090", height: height }}>
            <EditContent
              value={this.state.value}
              onValueChange={this.onValueChange}
              height={height}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default EditPage;
