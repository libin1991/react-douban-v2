import React, {Component} from 'react'

export default class Register extends Component {
  constructor(props) {
    super(props);
    
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
          <form action="#" method="POST">
            <label className="login__item">
              <input type="text" name="username" value={''} placeholder="手机号/邮箱"/>
            </label>
            <label className="login__item">
            <input type="text" name="username" value={''}
                   placeholder="昵称"/>
          </label>
            <label className="login__item">
              <input type="password" name="password" placeholder="密码(最少6位)"/>
            </label>
            <button className="btn btn--submit">
              下一步
            </button>
          </form>
          <footer className="login__footer">
            <p>
              <span>点击[下一步],代表你已阅读并同意用户使用协议</span>
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
