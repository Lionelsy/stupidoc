import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import SideMenu from "./sideMenu";
import TopMenu from "./topMenu";
import EditArea from "./editArea";
import ContentShow from "./contentShow";

const { Footer, Content } = Layout;

class EditPage extends Component {
  state = {
    theme: "light",
    value:
      "# Live demo\n\nChanges are automatically rendered as you type.\n\n## Table of Contents\n\n* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)\n\n* Allows you to escape or skip HTML (try toggling the checkboxes above)\n* If you escape or skip the HTML, no `dangerouslySetInnerHTML` is used! Yay!\n\n## HTML block below\n\n<blockquote>\n  This blockquote will change based on the HTML settings above.\n</blockquote>\n\n## How about some code?\n```js\nvar React = require('react');\nvar Markdown = require('react-markdown');\n\nReact.render(\n  <Markdown source='# Your markdown here' />,\n  document.getElementById('content')\n);\n```\n\nPretty neat, eh?\n\n## Tables?\n\n| Feature   | Support |\n| --------- | ------- |\n| tables    | ✔ |\n| alignment | ✔ |\n| wewt      | ✔ |\n\n## More info?\n\nRead usage information and more on [GitHub](//github.com/rexxars/react-markdown)\n\n---------------\n\nA component by [Espen Hovlandsdal](https://espen.codes/)",
    height: "88vh"
  };

  onChange = value => {
    console.log("new value", value);
    this.setState({ value });
  };

  render() {
    return (
      <div>
        <TopMenu theme={this.state.theme} />
        <Content style={{ height: this.state.height }}>
          <Row>
            <Col span={2}>
              <SideMenu height={this.state.height} theme={this.state.theme} />
            </Col>
            <Col span={11}>
              <EditArea
                onChange={this.onChange}
                value={this.state.value}
                height={this.state.height}
              />
            </Col>
            <Col span={11}>
              <ContentShow value={this.state.value} />
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          @CopyRight SUSTech Doc by Xinghe Yao
        </Footer>
      </div>
    );
  }
}

export default EditPage;
