import React, { Component } from 'react'
import {Link} from 'react-router'
import Header from './Header.jsx'


export default class People extends Component {
  constructor(props) {
    super(props);
  }
  
  
  render() {
    return(
      <div>
        <Header />
        <div className="people">
          <header className="people__header">
            <p>还未登陆? 请使用<span className="douban--green">豆瓣账号</span>登录</p>
          </header>
          <div className="people__login">
            <p>登录豆瓣账号后,可以进行订单查询,使用优惠券</p>
            <Link className="btn btn--green btn--long" to="/login">登录</Link>
            <p>还没有豆瓣账号? <Link to="/register" className="douban--green">注册</Link></p>
          </div>
          <footer className="people__footer">
            <p>使用匿名购买,则可以点击以下链接查询订单</p>
            <a className="people__footer--search douban--green" href="">查询订单</a>
          </footer>
        </div>
      </div>
    );
  }
}
