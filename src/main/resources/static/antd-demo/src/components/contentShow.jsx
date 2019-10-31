import React, { Component } from "react";
import ReactMarkDown from "react-markdown";

class ContentShow extends Component {
  render() {
    return (
      <div>
        <ReactMarkDown source={this.props.value} />
      </div>
    );
  }
}

export default ContentShow;
