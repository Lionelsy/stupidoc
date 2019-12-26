import React, { Component } from "react";
import { Radio, Tabs, TabPane } from "antd";
class AppSlidingBar extends Component {
  state = { mode: "vertical" };
  render() {
    const mode = this.state.mode;
    return (
      <div>
        <Radio.Group
          onChange={this.handleModeChange}
          value={mode}
          style={{ marginBottom: 8 }}
        >
          <Radio.Button value="top">Horizontal</Radio.Button>
          <Radio.Button value="left">Vertical</Radio.Button>
        </Radio.Group>
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 220 }}>
          {[...Array(30).keys()].map(i => (
            <TabPane tab={`Tab-${i}`} key={i}>
              Content of tab {i}
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}

export default AppSlidingBar;
