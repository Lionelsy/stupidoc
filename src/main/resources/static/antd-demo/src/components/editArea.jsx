import React, { Component } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
class EditArea extends Component {
  render() {
    return (
      <AceEditor
        mode="java"
        theme="github"
        onChange={this.props.onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        value={this.props.value}
        height={this.props.height}
        width={"100%"}
      ></AceEditor>
    );
  }
}

export default EditArea;
