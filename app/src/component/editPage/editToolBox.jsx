import React, { Component } from "react";
class ToolBox extends Component {
  state = {};
  render() {
    return <div style={{ float: "left", width: this.props.width }}></div>;
  }
}

export default ToolBox;
