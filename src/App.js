import React from 'react';
import './App.css';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log("login result", response)
}
const componentClicked = (data) => {
  console.warn(data)
}
export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Login with Facebook</h1>

        <FacebookLogin
        appId='673611297836698'
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
        />
      </div>
    )
  }
}