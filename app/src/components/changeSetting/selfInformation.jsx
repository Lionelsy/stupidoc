import React, { Component } from "react";
import AppNavbar from "../appNavbar";
import {
  Tabs,
  Radio,
  Col,
  Row,
  Icon,
  Input,
  Button,
  Breadcrumb,
  Typography,
  Card
} from "antd";

const { TabPane } = Tabs;
const { Search } = Input;
const { Text } = Typography;

class SelfInformation extends Component {
  state = {
    firstColSpan: 5,
    secondColSpan: 15,
    thirdColSpan: 4,
    appNavbarWidth: "100%",
    appNavbarHeight: "10%",
    mode: "left",
    avatar_url:
      "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
  };
  render() {
    const {
      appNavbarWidth,
      appNavbarHeight,
      firstColSpan,
      secondColSpan,
      thirdColSpan
    } = this.state;
    return (
      <div style={{ background: "#f9f9f9", height: "100vh" }}>
        <div
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            background: "#f7f7f7"
          }}
        >
          <AppNavbar width={appNavbarWidth} height={appNavbarHeight} />
        </div>
        <div>
          <Row>
            <Col span={6} offset={5}>
              <Breadcrumb style={{ marginTop: 100 }}>
                <Breadcrumb.Item href="">
                  <Icon type="home" />
                  <span>Home</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <Icon type="user" />
                  <span>Lionel</span>
                </Breadcrumb.Item>
              </Breadcrumb>
              <Card style={{ width: 700 }}>
                <Tabs
                  tabPosition={this.state.mode}
                  defaultActiveKey="1"
                  style={{
                    height: 320,
                    width: 600,
                    marginTop: 20,
                    textAlign: "left"
                  }}
                >
                  <TabPane tab={"账号信息"} key={1}>
                    <Row style={{ margin: 10 }} type="flex" align="middle">
                      <Col span={firstColSpan}>
                        <Icon type="user" />
                        <span>昵称</span>
                      </Col>
                      <Col span={secondColSpan}>
                        <Search placeholder="Lionel" />
                      </Col>
                      <Col span={thirdColSpan}></Col>
                    </Row>
                    <Row style={{ margin: 10 }} type="flex" align="middle">
                      <Col span={firstColSpan}>
                        <Icon type="lock" />
                        <span>密码</span>
                      </Col>
                      <Col span={secondColSpan} style={{ textAlign: "left" }}>
                        <Text disabled>未设置</Text>
                      </Col>
                      <Col span={thirdColSpan}>
                        <Button type="link">设置</Button>
                      </Col>
                    </Row>
                    <Row style={{ margin: 10 }} type="flex" align="middle">
                      <Col span={firstColSpan}>
                        <Icon type="phone" />
                        <span>手机</span>
                      </Col>
                      <Col span={secondColSpan}>
                        <Text>13313132424</Text>
                      </Col>
                      <Col span={thirdColSpan}>
                        <Button type="link">编辑</Button>
                      </Col>
                    </Row>
                    <Row style={{ margin: 10 }} type="flex" align="middle">
                      <Col span={firstColSpan}>
                        <Icon type="mail" />
                        <span>邮箱</span>
                      </Col>
                      <Col span={secondColSpan}>
                        <Text disabled>未绑定</Text>
                      </Col>
                      <Col span={thirdColSpan}>
                        <Button type="link">绑定</Button>
                      </Col>
                    </Row>
                    <Row style={{ margin: 10 }} type="flex" align="middle">
                      <Col span={firstColSpan}>
                        <Icon type="wechat" />
                        <span>微信</span>
                      </Col>
                      <Col span={secondColSpan}>
                        <Text>已绑定</Text>
                      </Col>
                      <Col span={thirdColSpan}>
                        <Button type="link" style={{ color: "#ff2222" }}>
                          解绑
                        </Button>
                      </Col>
                    </Row>
                    <Row style={{ margin: 10 }} type="flex" align="middle">
                      <Col span={firstColSpan}>
                        <Icon type="user-add" />
                        <span>账户类型</span>
                      </Col>
                      <Col span={secondColSpan}>
                        <Text>基础版</Text>
                      </Col>
                      <Col span={thirdColSpan}>
                        <Button type="link">了解高级版</Button>
                      </Col>
                    </Row>
                    <Row style={{ margin: 10 }} type="flex" align="middle">
                      <Col span={firstColSpan}>
                        <Icon type="idcard" />
                        <span>账户ID</span>
                      </Col>
                      <Col span={secondColSpan}>
                        <Text>33025748</Text>
                      </Col>
                      <Col span={thirdColSpan}></Col>
                    </Row>
                  </TabPane>
                  <TabPane tab={"支付记录"} key={2}>
                    <Text>你没有支付记录哟</Text>
                  </TabPane>
                  <TabPane tab={"通知设置"} key={3}>
                    <Text>这里也不让你设置哟</Text>
                  </TabPane>
                </Tabs>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default SelfInformation;
