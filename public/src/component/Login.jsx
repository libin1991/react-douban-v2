import React, {Component} from 'react'
import {Link} from 'react-router'
import 'isomorphic-fetch'
import 'es6-promise'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      pass: '',
      validate: ''
    };
    this.handleUserNameInput = this.handleUserNameInput.bind(this);
    this.handlePassInput = this.handlePassInput.bind(this);
    this.handleValidateInput = this.handleValidateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  // 用户输入用户名
  handleUserNameInput(e) {
    this.setState({
      userName: e.target.value
    })
  }
  
  // 输入密码
  handlePassInput(e) {
    this.setState({
      pass: e.target.value
    })
  }
  
  // 输入验证码
  handleValidateInput(e) {
    this.setState({
      validate: e.target.value
    })
  }
  
  // 点击登录
  handleSubmit(e) {
    e.preventDefault();
    let username = this.username.value.trim();
    let password = this.password.value.trim();
    let validationCode = this.validationCode.value.trim();
    
    console.log('login...');
    console.log('username: ' + username);
    console.log('password: ' + encodeURIComponent(password));
    console.log('validationCode: ' + validationCode);
    
    /*TODO 此处暂时省略输入验证......*/
    
    // 假设用户输入都是合法的,发起请求
    let post = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password: encodeURIComponent(password),
        validate: validationCode
      })
    };
    fetch('https:localhost:3000/login', post)
      .then(res => {
        // 以下处理登陆失败,显示弹出框
        if(res.status >= 400) {
          console.log('这里出错啦...');
          
        }
        return res.json()
      })
      .then(data => console.log(data))
      .catch(err => console.log('出错啦!'));
}
  
  render() {
    
    
    return (
      <div className="login">
        <header className="login__header">
          <a className="login__header--cancel douban--green"
             href="javascript: history.go(-1)">
            取消
          </a>
          <h1>登录豆瓣</h1>
        </header>
        <main className="login__main">
          <form onSubmit={this.handleSubmit}>
            <label className="login__item">
              <input
                type="text"
                name="username"
                ref={input => this.username = input}
                value={this.state.userName}
                onChange={this.handleUserNameInput}
                placeholder="邮箱/手机号/用户名"/>
            </label>
            <label className="login__item">
              <input
                type="password"
                name="password"
                ref={input => this.password = input}
                value={this.state.pass}
                onChange={this.handlePassInput}
                placeholder="密码"/>
            </label>
            <label className="login__item login__item--validate">
              <input
                type="text"
                name="validate"
                ref={input => this.validationCode = input}
                value={this.state.validate}
                onChange={this.handleValidateInput}
                placeholder="验证"/>
            </label>
            <button className="btn btn--submit">
              登录
            </button>
          </form>
          <footer className="login__footer">
            <p>
              <span className="login__other">其他登录方式</span>
              &
              <span className="login__retrieve-password">找回密码</span>
            </p>
            <p>
              <Link to="/register" className="douban--green">注册豆瓣账号</Link>
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
