import React, {Component} from 'react'
import {Link} from 'react-router'

export default class ProductView extends Component {
  
  constructor(props) {
    super(props);
    this.hanldeImgError = this.hanldeImgError.bind(this);
    this.handleLoaded = this.handleLoaded.bind(this);
  }
  
  // 如果图片加载失败,将其隐藏
  hanldeImgError(e) {
    e.target.style.visibility = 'hidden';
  }
  
  // 图片加载完毕不再显示替代背景
  handleLoaded(e) {
    e.target.style.visibility = 'visible';
  }
  
  render() {
    let item = this.props.item;
    
    return (
      <div
        className="product-item"
      >
        <Link to="/item" className="product-thumbnail">
          <img src={item.photo_url} alt=""
               onError={this.hanldeImgError}
               onLoad={this.handleLoaded}
          />
        </Link>
        <p className="product-info">
          <a href="">{item.title}</a>
        </p>
        <p className="price-panel">
          <span className="price">{'￥' + item.price}</span>
          <span className="market-price" style={{'textDecoration': 'line-through'}}>
            { item.price == item.market_price ? '' : ' ￥' + item.market_price}
          </span>
        </p>
      </div>
    );
  }
}





