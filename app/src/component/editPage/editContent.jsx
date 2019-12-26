import React, { Component } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import { Button } from "antd";
import ReactMarkdown from "react-markdown";

import pdf_file from "./main.pdf";
class EditContent extends Component {
  state = { move: false };
  onMouseDown = e => {
    var target = e.target;
    var edit = document.getElementById("edit");
    var show = document.getElementById("show");
    var viewer = document.getElementById("pdf-viewer");
    var maxWidth = window.innerWidth;
    var sideWidth = maxWidth * 0.1667;
    var dragWidth = maxWidth * 0.006;
    var editor = this.refs.reactAceComponent.editor;
    document.onmousemove = event => {
      this.setState({ move: true });
      event.preventDefault();
      var x = event.pageX;
      if (x < maxWidth * 0.3 || x > maxWidth * 0.816) return;
      target.style.left = x - sideWidth + "px";
      edit.style.width = x - sideWidth + "px";
      show.style.width = maxWidth - x - dragWidth + "px";
      editor.resize();
    };
    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
      this.setState({ move: false });
    };
  };

  componentDidMount = () => {
    this.fullScreen();
  };

  onChange = newValue => {
    console.log(newValue);
  };

  fullScreen = () => {
    document.getElementById("pdf-viewer").addEventListener("click", function() {
      var docElm = document.documentElement; //W3C
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
      } //FireFox
      else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
      } //Chrome等
      else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
      } //IE11
      else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen();
      }
    });
  };
  render() {
    return (
      <div style={{ position: "relative", height: window.innerHeight * 0.9 }}>
        <div
          id="edit"
          style={{
            background: "#009",
            height: "100%",
            width: "50%",
            float: "left"
          }}
        >
          <AceEditor
            mode="java"
            theme="github"
            name="editor"
            style={{ width: "100%", height: "100%" }}
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
            width: "1%",
            height: "100%",
            background: "#aa0",
            cursor: "e-resize"
          }}
          onMouseDown={this.onMouseDown}
        ></div>

        <div
          id="show"
          style={{
            background: "#aaa",
            height: "100%",
            width: "50%",
            float: "right",
            overflow: "auto"
          }}
        >
          <Button
            type="primary"
            shape="round"
            icon="tool"
            style={{ marginLeft: "5%", height: "5%" }}
          >
            Compile
          </Button>
          <br />
          {this.state.move ? (
            <div></div>
          ) : (
            <iframe
              id="pdf-viewer"
              style={{
                width: "100%",
                height: "100%"
              }}
              src={pdf_file}
              allowFullScreen={true}
              frameBorder="0"
            />
          )}
          {/* <ReactMarkdown source={this.props.value} escapeHtml={false} /> */}
        </div>
      </div>
    );
  }
}

export default EditContent;
