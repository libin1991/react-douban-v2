
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

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



