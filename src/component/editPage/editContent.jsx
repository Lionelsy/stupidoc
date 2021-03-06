import React, { Component } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import { Button } from "antd";
import ReactMarkdown from "react-markdown";

import pdf_file from "./main.pdf";
class EditContent extends Component {
  state = { move: false, document_type: 0 };
  onMouseDown = e => {
    var target = e.target;
    var edit = document.getElementById("edit");
    var show = document.getElementById("show");
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

  onChange = newValue => {
    console.log(newValue);
  };

  fullScreen = () => {
    document.getElementById("pdf-viewer").addEventListener("click", function() {
      var docElm = document.documentElement;
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
      } //FireFox
      else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
      } //Chrome
      else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
      } //IE11
      else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen();
      }
    });
  };
  render() {
    console.log(this.props.userId);
    console.log(this.props.document_id);
    console.log(this.props.document_type);
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
            width: "0.75%",
            height: "100%",
            background: "#e7e7e7",
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
            type="ghost"
            icon="tool"
            style={{
              marginLeft: "5%",
              height: "5%"
            }}
          >
            {this.state.document_type === 0 ? "Save" : "Compile"}
          </Button>
          <br />
          {this.state.move ? (
            <div></div>
          ) : this.props.document_type === 0 ? (
            <ReactMarkdown source={this.props.value} escapeHtml={false} />
          ) : (
            <iframe
              title="showPanel"
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
        </div>
      </div>
    );
  }
}

export default EditContent;
