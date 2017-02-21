
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// 加载样式表
import '../../static/css/site.css'
import '../../static/css/header.scss'
import '../../static/css/main.scss'
import '../../static/css/store.scss'
import '../../static/css/productview.scss'
import '../../static/css/category.scss'
import '../../static/css/carts.scss'
import '../../static/css/singleproduct.scss'
import '../../static/css/item.scss'
import '../../static/css/item-details.scss'
import '../../static/css/itemcomment.scss'
import '../../static/css/people.scss'
import '../../static/css/login.scss'
import '../../static/css/register.scss'

// 加载组件
import Main from '../component/Main.jsx'
import Category from '../component/Category.jsx'
import Carts from '../component/Carts.jsx'
import People from '../component/People.jsx'
import Item from '../component/Item.jsx'
import Login from '../component/Login.jsx'
import Register from '../component/Register.jsx'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return this.props.children;
  }
}

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Main}/>
      <Route path="category" component={Category} />
      <Route path="cart"  component={Carts}  />
      <Route path="people" component={People} />
      <Route path="item" component={Item} />
      <Route path="login" component={Login}/>
      <Route path="register" component={Register}/>
    </Route>
  </Router>,
  document.getElementById('app')
);



