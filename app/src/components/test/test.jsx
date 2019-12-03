import React, { Component } from "react";
import TestSide from "./testSide";
import TestNavbar from "./testNavbar";
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
        {/* <div style={{ position: "relative", width: "100%", height: "800px" }}>
          <TestSide
            collapsed={this.state.collapsed}
            toggleCollapsed={this.toggleCollapsed}
          />
          <div
            id="edit"
            style={{
              margin: this.state.collapsed ? "0 40% 0 80px" : "0 40% 0 256px",
              background: "#ccc",
              height: "800px"
            }}
          >
            <h1>middle</h1>
          </div>
          <label
            onMouseDown={this.onMouseDown}
            style={{
              position: "absolute",
              top: 0,
              left: "59.3%",
              background: "#bd3f13",
              cursor: "e-resize",
              width: "0.7%",
              height: height
            }}
          ></label>
          <div
            id="show"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              background: "#090",
              width: "40%",
              height: height
            }}
          >
            <h1>right</h1>
          </div>
        </div>
        <div
          style={{
            background: "#ddd",
            height: "200px",
            width: "100",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "column"
          }}
        >
          <h1>Footer</h1>
        </div> */}
      </div>
    );
  }
}

export default Test;
