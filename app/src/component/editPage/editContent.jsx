import React, { Component } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import { Layout, Button } from "antd";
import ReactMarkdown from "react-markdown";
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";
import pdf_file from "./main.pdf";

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const { Content } = Layout;

class EditContent extends Component {
  render() {
    const layout = [
      { i: "a", x: 0, y: 0, w: 6, h: 10, minW: 4 },
      { i: "b", x: 6, y: 0, w: 6, h: 10, minW: 4 }
    ];
    return (
      <div
        style={{
          background: "#fff",
          height: window.innerHeight * 0.9
        }}
      >
        <ResponsiveReactGridLayout
          className="layout"
          layout={layout}
          // cols={12}
          autoSize={true}
          rowHeight={window.innerHeight * 0.45}
          width={window.innerWidth}
          col={12}
          // width={1200}
        >
          <div id="edit" key="a" style={{ width: "50%", float: "left" }}>
            <AceEditor
              mode="java"
              theme="github"
              name="editor"
              style={{ width: "98%", height: "100%" }}
              value={this.props.value}
              onChange={this.props.onValueChange}
              wrapEnabled
              enableBasicAutocompletion
              enableLiveAutocompletion
              ref="reactAceComponent"
            />
          </div>

          <div id="show" key="b" style={{ width: "50%", float: "right" }}>
            <Button
              type="primary"
              shape="round"
              icon="tool"
              style={{ marginLeft: "5%", height: "5%" }}
            >
              Compile
            </Button>
            <br />
            <iframe
              id="pdf-viewer"
              style={{ width: "100%", height: "95%" }}
              src={pdf_file}
              allowfullscreen
            />
            {/* <ReactMarkdown source={this.props.value} escapeHtml={false} /> */}
          </div>
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

export default EditContent;
