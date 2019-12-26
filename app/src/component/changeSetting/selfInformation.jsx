import React, { Component } from "react";
import AppNavbar from "../common/appNavbar";
import {
  Tabs,
  Col,
  Row,
  Icon,
  Input,
  Button,
  Breadcrumb,
  Typography,
  Card,
  Modal
} from "antd";
import { Redirect } from "react-router-dom";

const { TabPane } = Tabs;
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
      "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    visible: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleChangeName = e => {
    let newName = this.refs.newName.state.value;
    let data = { user_id: this.props.userId, user_name: newName };
    console.log(this.props.userId);
    if (!newName) {
      alert("用户名不能为空");
    } else {
      fetch("/user/modifyUserPassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => console.log(data.msg));
    }
  };
  handleOk = e => {
    var old1 = this.refs.old1.input.value;
    var old2 = this.refs.old2.input.value;
    if (old1 === old2) {
      fetch("/user/modifyUserName", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_id: parseInt(12345678),
          user_password: old1
        })
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          alert("修改成功");
        });
    } else {
      alert("两次输入的新密码不一样嗷");
    }
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  render() {
    if (this.props.userId === -1) {
      return <Redirect to="/login" />;
    }
    const {
      appNavbarWidth,
      appNavbarHeight,
      firstColSpan,
      secondColSpan,
      thirdColSpan
    } = this.state;
    return (
      <div style={{ background: "#f9f9f9", height: "100vh" }}>
        <Modal
          title="更改密码"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          destroyOnClose={true}
        >
          <Input.Password
            style={{
              marginTop: 10,
              marginBottom: 20,
              background: this.state.backgroundColor
            }}
            ref="old1"
            placeholder="请输入新密码"
          />
          <Input.Password
            style={{
              marginTop: 10,
              marginBottom: 20,
              background: this.state.backgroundColor
            }}
            ref="old2"
            placeholder="请再输入新密码"
          />
        </Modal>
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
            <Col span={6} offset={7}>
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
                        <Input placeholder="Lionel" ref="newName" />
                      </Col>
                      <Col span={thirdColSpan}>
                        <Button type="link" onClick={this.handleChangeName}>
                          修改昵称
                        </Button>
                      </Col>
                    </Row>
                    <Row style={{ margin: 10 }} type="flex" align="middle">
                      <Col span={firstColSpan}>
                        <Icon type="lock" />
                        <span>密码</span>
                      </Col>
                      <Col span={secondColSpan} style={{ textAlign: "left" }}>
                        <Text disabled>********</Text>
                      </Col>
                      <Col span={thirdColSpan}>
                        <Button type="link" onClick={this.showModal}>
                          修改密码
                        </Button>
                      </Col>
                    </Row>
                    <Row style={{ margin: 10 }} type="flex" align="middle">
                      <Col span={firstColSpan}>
                        <Icon type="idcard" />
                        <span>账户ID</span>
                      </Col>
                      <Col span={secondColSpan}>
                        <Text>{this.props.userId}</Text>
                      </Col>
                      <Col span={thirdColSpan}></Col>
                    </Row>
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
