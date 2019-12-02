import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox, notification } from "antd";
import { Redirect } from "react-router-dom";

const openNotificationWithIcon = type => {
  notification[type]({
    message: "Wrong password",
    description: "The password is correct!"
  });
};

class NormalLoginForm extends Component {
  state = {
    username: "",
    password: "",
    remember: false,
    login: false
  };

  onChange = (username, password, remember) => {
    this.setState({
      username: username,
      password: password,
      remember: remember
    });
    fetch("http://localhost:8080/login" + "/" + username + "/" + password)
      .then(res => res.json())
      .then(login => this.setState({ login: login }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      this.onChange(values.username, values.password, values.remember);
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { login } = this.state;
    if (login) {
      return <Redirect path="/info" />;
    }
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item style={{ textAlign: "right" }}>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "UserId is required" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item style={{ textAlign: "right" }}>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Password is required" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <div>
            <div style={{ float: "left" }}>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
            </div>
            <div style={{ float: "right" }}>
              <a
                className="login-form-forgot"
                href=""
                style={{ textAlign: "right" }}
              >
                Forget Password
              </a>
            </div>
          </div>
          <br />
        </Form.Item>
        <div style={{ textAlign: "center" }}>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            size="large"
            // href="/login"
            formMethod="POST"
            block
          >
            Log in
          </Button>
        </div>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalLoginForm
);

export default WrappedNormalLoginForm;
