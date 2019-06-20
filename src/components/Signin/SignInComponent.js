import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Input, Form, Button } from "antd";
import "antd/dist/antd.css";
import { startSignin } from "../../actions/auth";

const SignInComponent = ({ startSignin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    const data = {
      username,
      password
    }
    startSignin(data);
  }

  const handleUsername = event => {
    setUsername(event.target.value)
  }

  const handlePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <div className="auth__container">
      <h1>SignIn</h1>
      <Form onSubmit={handleSubmit} className="auth__form">
        <Form.Item>
          <label>Username</label>
          <Input allowClear onChange={handleUsername} required />
        </Form.Item>
        <Form.Item>
          <label>Pasword</label>
          <Input.Password onChange={handlePassword} required />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            block
            className="form-button button-secondary button-submit"
          >
            SignIn
          </Button>
          Or <Link to="/">Sign up</Link>
        </Form.Item>
      </Form>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  startSignin: (data) => dispatch(startSignin(data))
});

export default connect(undefined, mapDispatchToProps)(SignInComponent);