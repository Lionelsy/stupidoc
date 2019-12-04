import React, { Component } from "react";
class TestContent extends Component {
  state = {};

  onMouseDown = e => {
    var target = e.target;
    var edit = document.getElementById("edit");
    var show = document.getElementById("show");
    var maxWidth = window.innerWidth;
    var sideWidth = maxWidth * 0.1667;
    var targetWidth = maxWidth * 0.007;
    document.onmousemove = event => {
      event.preventDefault();
      var x = event.pageX;
      target.style.left = x - sideWidth + "px";
      edit.style.width = x - sideWidth + "px";
      show.style.width = maxWidth - x - targetWidth + "px";
    };
    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
    };
  };

  render() {
    return (
      <div style={{ position: "relative", height: "500px" }}>
        <div
          id="edit"
          style={{
            background: "#009",
            height: "500px",
            width: "50%",
            float: "left"
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "49.3%",
            bottom: 0,
            right: "50%",
            width: "0.7%",
            height: "500px",
            background: "#aa0",
            cursor: "e-resize"
          }}
          onMouseDown={this.onMouseDown}
        ></div>
        <div
          id="show"
          style={{
            background: "#aaa",
            height: "500px",
            width: "50%",
            float: "right"
          }}
        ></div>
      </div>
    );
  }
}

export default TestContent;
