/**
 * 商铺简介组件
 */


import React, {Component} from 'react'

import ProductView from './ProductView.jsx'
import Slider from './slider/Slider.jsx'

// import '../../static/css/store.scss'


export default class Store extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let shop = this.props.shop;
    let productsLists = shop.skus;
    return (
      <div className="shop-wrapper">
        <div className="shop-header">
          <a href="">
            <img className="shop-thumbnail" src={shop.picture_url} alt=""/>
          </a>
          <a className="shop-name" href="">{shop.name}</a>
          <p className="shop-intro">{shop.intro}</p>
        </div>
        <div className="shop-lists">
          <Slider
            className="shop-slider"
            items={productsLists.length}
          >
            {
              productsLists.map(product => {
                return (
                  <div className="slider-item" key={product.product_id}>
                    <ProductView item={product}/>
                  </div>
                );
              })
            }
          </Slider>
        </div>
      </div>
    );
  }
}
