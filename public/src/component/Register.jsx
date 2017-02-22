import React, {Component} from 'react'
import {Link} from 'react-router'
import 'isomorphic-fetch'
import 'es6-promise'

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      nickname: '',
      pass: ''
    };
    this.handleUserNameInput = this.handleUserNameInput.bind(this);
    this.handleNicknameInput = this.handleNicknameInput.bind(this);
    this.handlePassInput = this.handlePassInput.bind(this);
    this.handleNextStep = this.handleNextStep.bind(this);
  }
  
  // 用户输入用户名
  handleUserNameInput(e) {
    this.setState({
      username: e.target.value
    })
  }
  
  // 输入密码
  handlePassInput(e) {
    this.setState({
      pass: e.target.value
    })
  }
  
  // 输入昵称
  handleNicknameInput(e) {
    this.setState({
      nickname: e.target.value
    })
  }
  
  handleNextStep(e) {
    e.preventDefault();
    console.log('next step...');
    
    let username = this.state.username;
    let nickname = this.state.nickname;
    let password = this.state.pass;
    
    console.log('username: ' + username);
    console.log('nickname: ' + nickname);
    console.log('password: ' + password);
    
    let user = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        nickname,
        password
      })
    };
    fetch('/register', user)
      .then(res => {
        let resCode = res.statusCode;
        console.log(resCode);
      })
      .catch(err => console.log('注册页请求有错啦...'));
  }
  
  render() {
    
    return (
      <div className="register">
        <header className="login__header">
          <a className="login__header--cancel douban--green"
             href="javascript: history.go(-1)">
            取消
          </a>
        </header>
        <main className="login__main">
          <h1 className="welcome">欢迎加入豆瓣</h1>
          <form onSubmit={this.handleNextStep}>
            <label className="login__item">
              <input type="text"
                     name="username"
                     ref={input => this.username = input}
                     value={this.state.username}
                     onChange={this.handleUserNameInput}
                     placeholder="手机号/邮箱"/>
            </label>
            <label className="login__item">
            <input type="text"
                   name="username"
                   ref={input => this.nickname = input}
                   value={this.state.nickname}
                   onChange={this.handleNicknameInput}
                   placeholder="昵称"/>
          </label>
            <label className="login__item">
              <input type="password"
                     name="password"
                     ref={input => this.password = input}
                     value={this.state.pass}
                     onChange={this.handlePassInput}
                     placeholder="密码(最少6位)"/>
            </label>
            <button type="submit" className="btn btn--submit">
              下一步
            </button>
          </form>
          <footer className="login__footer">
            <p>
              <span>点击[下一步],代表你已阅读并同意用户使用协议</span>
            </p>
            <p>
              <span>已有豆瓣账号? 立即 </span>
              <Link to="/login" className="douban--green">登录</Link>
            </p>
            <p className="use-douban">
              <span className="douban--green">使用豆瓣APP</span>
            </p>
          </footer>
        </main>
      </div>
    );
  }
}
