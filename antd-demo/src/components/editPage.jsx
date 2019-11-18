import React, { Component } from "react";
import AppNavbar from "./appNavbar";
import AppContent from "./appContent";
import AppFooter from "./appFooter";

class EditPage extends Component {
  state = {
    theme: "light",
    value:
      "# Live demo\n\nChanges are automatically rendered as you type.\n\n## Table of Contents\n\n* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)\n\n* Allows you to escape or skip HTML (try toggling the checkboxes above)\n* If you escape or skip the HTML, no `dangerouslySetInnerHTML` is used! Yay!\n\n## HTML block below\n\n<blockquote>\n  This blockquote will change based on the HTML settings above.\n</blockquote>\n\n## How about some code?\n```js\nvar React = require('react');\nvar Markdown = require('react-markdown');\n\nReact.render(\n  <Markdown source='# Your markdown here' />,\n  document.getElementById('content')\n);\n```\n\nPretty neat, eh?\n\n## Tables?\n\n| Feature   | Support |\n| --------- | ------- |\n| tables    | ✔ |\n| alignment | ✔ |\n| wewt      | ✔ |\n\n## More info?\n\nRead usage information and more on [GitHub](//github.com/rexxars/react-markdown)\n\n---------------\n\nA component by [Espen Hovlandsdal](https://espen.codes/)",
    height: "88vh",
    bottom: 0
  };

  render() {
    return (
      <div>
        <div
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            background: "#f7f7f7"
          }}
        >
          <AppNavbar />
        </div>
        <div>
          <AppContent />
        </div>
        <div
          style={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            zIndex: 1,
            textAlign: "center"
          }}
        >
          <AppFooter />
        </div>
      </div>
    );
  }
}

export default EditPage;
