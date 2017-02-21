
import React from 'react'
import { Link, IndexLink } from 'react-router'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleTransition = this.handleTransition.bind(this);
  }
  handleTransition(e) {
   
  }
  render() {
    return (
      <div className="site-header">
        <div className="search-bar">
          <a className="site-logo" href="#">
            豆瓣市集
          </a>
          <div className="search-wrapper">
            <a className="search-icon" href="#" />
            <form className="search-form">
              <input type="text"/>
              <a className="search-icon" href="#" />
            </form>
            <div className="opacity-bg"></div>
          </div>
        </div>
        <div className="nav-bar clearfix">
          <IndexLink
            to="/"
            className="nav-item main-link"
            activeClassName="active"
          >
            首页
          </IndexLink>
          <Link
            to="/category"
            className="nav-item category-link"
            activeClassName="active"
          >
            分类
          </Link>
          <Link
            to="/cart"
            className="nav-item cart-link"
            activeClassName="active"
            onClick={this.handleTransition}
          >
            购物车
          </Link>
          <Link
            to="/people"
            className="nav-item people-link"
            activeClassName="active"
          >
            我的
          </Link>
        </div>
      </div>
    )
  }
}
