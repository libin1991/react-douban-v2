import React, {Component} from 'react'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      pass: ''
    };
    this.handleUserNameInput = this.handleUserNameInput.bind(this);
    this.handlePassInput = this.handlePassInput.bind(this);
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
  
  // 点击登录
  handleSubmit(e) {
    e.preventDefault();
    console.log('login...');
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
          <form action="#" method="POST" onSubmit={this.handleSubmit}>
            <label className="login__item">
              <input
                type="text"
                name="username"
                value={this.state.userName}
                onChange={this.handleUserNameInput}
                placeholder="邮箱/手机号/用户名"/>
            </label>
            <label className="login__item">
              <input
                type="password"
                name="password"
                value={this.state.pass}
                onChange={this.handlePassInput}
                placeholder="密码"/>
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
            <p className="use-douban">
              <span className="douban--green">使用豆瓣APP</span>
            </p>
          </footer>
        </main>
      </div>
    );
  }
}
