import React, { Component } from "react";
import TestSide from "./testSide";
import TestNavbar from "./testNavbar";
import { Row, Col } from "antd";
import TestContent from "./testContent";
class Test extends Component {
  state = {
    collapsed: false,
    height: "800px"
  };

  toggleCollapsed = () => {
    this.setState({ collapsed: !this.state.collapsed });
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

  render() {
    const { height } = this.state;

    return (
      <div>
        <TestNavbar />
        <Row>
          <Col span={4} style={{ background: "#900", height: "500px" }}>
            <TestSide />
          </Col>
          <Col span={20} style={{ background: "#090", height: "500px" }}>
            <TestContent />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Test;
