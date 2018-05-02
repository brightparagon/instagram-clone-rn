import React from "react";
import LoginForm from "./presenter";

class Container extends React.Component {
  state = {
    username: "",
    password: ""
  };

  _handleInputChange = event => {
    const { target: { name, value } } = event;
    this.setState({
      [name]: value
    });
  }

  _handleSubmit = event => {
    event.preventDefault();
    // action
  }

  _handleFacebookLogin = response => {
    console.log(response)
  }

  render() {
    const { username, password } = this.state;
    return (
      <LoginForm
        usernameValue={username}
        passwordValue={password}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        handleFacebookLogin={this._handleFacebookLogin}
      />
    );
  }
}

export default Container;
