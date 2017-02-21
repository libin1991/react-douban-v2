import React, {Component} from 'react'

import SingleProduct from './SingleProduct.jsx'

export default class CartsShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectThisShop: false
    };
    
    this.handleSelectShop = this.handleSelectShop.bind(this);
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
    this.handleSelectProduct = this.handleSelectProduct.bind(this);
    this.handleChangeAmounts = this.handleChangeAmounts.bind(this);
  }
  
  // 选中店铺中所有的商品
  handleSelectShop() {
    let shop_id = this.props.shop.id;
    this.props.selectShop(shop_id);
  }
  
  // 移除一个商品
  handleRemoveProduct(id) {
    let shop_id = this.props.shop.id;
    this.props.removeProduct(shop_id, id);
  }
  
  // 店铺内某个商品被选中
  handleSelectProduct(id) {
    this.props.selectProduct(this.props.shop.id, id);
  }
  
  // 店铺内某个商品数量有更新
  handleChangeAmounts(id, amounts) {
    let shop_id = this.props.shop.id;
    this.props.changeAmounts(shop_id, id, amounts);
  }
  
  render() {

    let shop = this.props.shop;
    let shopProducts = shop.skus;
    let selectThisShop = shop.selectThisShop;
    
    return (
      <div className="cart-shop-wrapper">
        <div className="shop-header">
          <span
            onClick={this.handleSelectShop}
            style={{
              color: selectThisShop ?
                '#fc0000' :
                '#333'
            }}
          >
            {selectThisShop ? '取消选择' : '全选'}
          </span>
          <span className="shop-name">
            {"店铺: " + shop.name}
          </span>
        </div>
        <div className="products-wrapper">
          {
            shopProducts.map(product => {
              return (
                <SingleProduct
                  key={product.id}
                  product={product}
                  selectProduct={this.handleSelectProduct}
                  removeProduct={this.handleRemoveProduct}
                  changeAmounts={this.handleChangeAmounts}
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}

