import { Form, Icon, Input, Button } from "antd";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { notification } from "antd";

class NormalLoginForm extends Component {
  state = {
    login: 1
  };
  onWarning = () => {
    notification["warning"]({
      message: "Warning",
      description: "You Have Already Logged In !"
    });
  };
  onError = () => {
    notification["error"]({
      message: "error",
      description: "Your Password Is Wrong !"
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      values.user_id = parseInt(values.user_id);
      console.log(values);
      if (!err) {
        fetch("/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            user_id: parseInt(values.user_id),
            user_password: values.user_password
          })
        })
          .then(res => res.json())
          .then(data => {
            if (data.code === 0) {
              this.props.handleLogin(data.data.user_id, data.data.user_name);
            } else if (data.code === 2) {
              this.onWarning();
            } else {
              this.onError();
            }
            this.setState({ login: data.code });
          });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    if (this.state.login === 0) {
      return <Redirect to="/" />;
    }
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator("user_id", {
            rules: [{ required: true, message: "Please input your user_id!" }]
          })(
            <Input
              suffix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="User_id"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("user_password", {
            rules: [
              { required: true, message: "Please input your user_Password!" }
            ]
          })(
            <Input.Password
              suffix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="user_password"
              placeholder="user_Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ width: "100%" }}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalLoginForm
);

export default WrappedNormalLoginForm;
