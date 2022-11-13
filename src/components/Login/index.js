import { Component } from "react";
import { Navigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FaUserAlt, FaKey } from "react-icons/fa";
import axios from "axios";
import Cookies from "js-cookie";

import "./index.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
    showPassword: false,
    unErr: false,
    pwErr: false,
    responseErr: false,
    responseErrMsg: "",
    isLoggedin: false,
  };

  componentDidMount() {
    const getjwtToken = Cookies.get("jwtToken");
    if (getjwtToken === undefined) {
      this.setState({ isLoggedin: false });
    } else {
      this.setState({ isLoggedin: true });
    }
  }

  verifyUnInput = (event) => {
    if (event.target.value === "") {
      this.setState({ unErr: true });
    } else {
      this.setState({ unErr: false });
    }
  };

  verifyPwInput = (event) => {
    if (event.target.value === "") {
      this.setState({ pwErr: true });
    } else {
      this.setState({ pwErr: false });
    }
  };

  togglePassword = (event) => {
    this.setState({ showPassword: event.target.checked });
  };

  updateUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  updatePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  submitDetails = async (event) => {
    event.preventDefault();

    let response;
    const { username, password } = this.state;
    if (username === "") {
      this.setState({ unErr: true });
    }
    if (password === "") {
      this.setState({ pwErr: true });
    }
    if (username !== "" && password !== "") {
      try {
        response = await axios.post(
          `${process.env.REACT_APP_API_URL}/adminPanel/login`,
          {
            username: username,
            password: password,
          }
        );
        if (response.statusText) {
          Cookies.set("jwtToken", response.data, { expires: 30 });
          this.setState({ isLoggedin: true });
        }
      } catch (err) {
        this.setState({
          responseErr: true,
          responseErrMsg: err.response.data,
        });
      }
    }
  };

  LoginContainer = () => {
    const {
      username,
      password,
      showPassword,
      unErr,
      pwErr,
      responseErr,
      responseErrMsg,
    } = this.state;
    const passInputType = showPassword ? "text" : "password";
    const ErUsername = unErr ? "userInput err" : "userInput";
    const Erpassword = pwErr ? "userInput err" : "userInput";
    const invalidUser = responseErr
      ? "loginContainer loginError"
      : "loginContainer";
    const errorMsg = responseErr ? responseErrMsg : null;
    return (
      <div className={invalidUser}>
        <h3>MJ Premier</h3>
        <h3>Admin Panel</h3>
        <div>
          {/* <label htmlFor="username">User Name</label> */}
          <FaUserAlt className="icon" />
          <input
            className={ErUsername}
            value={username}
            onChange={this.updateUsername}
            onBlur={this.verifyUnInput}
            id="username"
            type="text"
            placeholder="User name"
          />
        </div>

        <div>
          {/* <label htmlFor="password">Password</label> */}
          <FaKey className="icon" />
          <input
            className={Erpassword}
            value={password}
            onChange={this.updatePassword}
            onBlur={this.verifyPwInput}
            id="password"
            type={passInputType}
            placeholder="Password"
          />
        </div>

        <div>
          <input
            onClick={this.togglePassword}
            className="showPassInput"
            type="checkbox"
          />
          <label htmlFor="checkBox">Show Password</label>
        </div>
        <p style={{ color: "red" }}>{errorMsg}</p>
        <Button
          type="submit"
          onClick={this.submitDetails}
          className="LoginButton"
          as="a"
          variant="primary"
        >
          Login
        </Button>
      </div>
    );
  };

  render() {
    const { isLoggedin } = this.state;
    return (
      <div className="mainContainer">
        <div className="loginPageBg">{this.LoginContainer()}</div>
        {isLoggedin && <Navigate to="/adminDashboard" />}
      </div>
    );
  }
}

export default Login;

// const response = await axios.get("https://api.publicapis.org/entries");
