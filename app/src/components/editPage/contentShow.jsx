import React, { Component } from "react";
import ReactMarkDown from "react-markdown";

class ContentShow extends Component {
  render() {
    return (
      <div>
        <ReactMarkDown
          style={{ height: this.props.height }}
          source={this.props.value}
        />
      </div>
    );
  }
}

export default ContentShow;
