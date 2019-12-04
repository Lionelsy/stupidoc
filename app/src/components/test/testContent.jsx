import React, { Component } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import ReactMarkdown from "react-markdown";

class TestContent extends Component {
  onMouseDown = e => {
    var target = e.target;
    var edit = document.getElementById("edit");
    var show = document.getElementById("show");
    var maxWidth = window.innerWidth;
    var sideWidth = maxWidth * 0.1667;
    var dragWidth = maxWidth * 0.006;
    var editor = this.refs.reactAceComponent.editor;
    document.onmousemove = event => {
      event.preventDefault();
      var x = event.pageX;
      if (x < maxWidth * 0.3 || x > maxWidth * 0.8667) return;
      target.style.left = x - sideWidth + "px";
      edit.style.width = x - sideWidth + "px";
      show.style.width = maxWidth - x - dragWidth + "px";
      editor.resize();
    };
    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
    };
  };

  onChange = newValue => {
    console.log(newValue);
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
        >
          <AceEditor
            mode="java"
            theme="github"
            name="editor"
            style={{ width: "100%", height: "500px" }}
            value={this.props.value}
            onChange={this.props.onValueChange}
            wrapEnabled
            enableBasicAutocompletion
            enableLiveAutocompletion
            ref="reactAceComponent"
          />
        </div>
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
        >
          <ReactMarkdown source={this.props.value} escapeHtml={false} />
        </div>
      </div>
    );
  }
}

export default TestContent;
