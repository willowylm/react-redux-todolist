import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import { registerToServer, changeRegisterState } from '../actions';
import { push } from 'connected-react-router';


class Register extends PureComponent {
  render() {
    let username;
    let password;

    return (
      <div id="root">
        <div>
          <h1>Register</h1>
        </div>
        <div>
          <span id="name">user name</span>
          <input
            type="text"
            ref={un => (username = un)}
            placeholder="input your user name"
          />
        </div>
        <div>
          <span id="password">password</span>
          <input
            type="text"
            ref={pw => (password = pw)}
            placeholder="input your password"
          />
        </div>
        <div>
          <button type='button' onClick={()=>{
            let userName = username.value;
            let passWord = password.value;
            this.props.registerToServer(userName, passWord);
          }}>Register</button>
        </div>
        <div>
        <button type='button' onClick={()=>{
            this.props.push('/');
          }}>Go to Login</button>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//     return {
//       userState: state.userState
//     };
//   };
  
//   const mapDispatchToProps = dispatch => ({
//     registerToServer: (userName, password) =>
//       dispatch(registerToServer(userName, password)),
//     push: path => dispatch(push(path)),
//     changeRegisterState: state => dispatch(changeRegisterState(state))
//   });

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(Register);

export default Register;
