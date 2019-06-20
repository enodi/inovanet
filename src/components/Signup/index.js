import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Input, Form, Button } from "antd";
import "antd/dist/antd.css";
import { signup } from "../../actions/auth";

const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    const data = {
      username,
      displayName,
      email,
      password
    }
    props.signup(data);
  }

  const handleUsername = event => {
    setUsername(event.target.value)
  }

  const handleDisplayName = event => {
    setDisplayName(event.target.value)
  }

  const handleEmail = event => {
    setEmail(event.target.value)
  }

  const handlePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <div className="auth__container">
      <h1>SignUp</h1>
      <Form onSubmit={handleSubmit} className="auth__form">
        <Form.Item>
          <label>Username</label>
          <Input allowClear onChange={handleUsername} />
        </Form.Item>
        <Form.Item>
          <label>Display Name</label>
          <Input allowClear onChange={handleDisplayName} />
        </Form.Item>
        <Form.Item>
          <label>Email</label>
          <Input type="email" allowClear onChange={handleEmail} />
        </Form.Item>
        <Form.Item>
          <label>Pasword</label>
          <Input.Password onChange={handlePassword} />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" block className="form-button button-secondary button-submit">
            Signup
          </Button>
          Or <Link to="/signin">Sign in</Link>
        </Form.Item>
      </Form>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  signup: (data) => dispatch(signup(data))
});

export default connect(undefined, mapDispatchToProps)(Signup);