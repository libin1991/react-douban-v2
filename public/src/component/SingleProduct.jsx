/**
 * 购物车中每个店铺中的单个商品组件
 */


import React from 'react'
import ReactDOM, {findDOMNode} from 'react-dom'

// import '../../static/css/singleproduct.css'

export default class SingleProduct extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubAmount = this.handleSubAmount.bind(this);
    this.handleAddAmount = this.handleAddAmount.bind(this);
    this.handleProductRemove = this.handleProductRemove.bind(this);
    this.handleSelectProduct = this.handleSelectProduct.bind(this);
    this.handleChangeAmounts = this.handleChangeAmounts.bind(this);
    this.handeImgError = this.handeImgError.bind(this);
    this.handleLoaded = this.handleLoaded.bind(this);
  }
  
  // 选中这个商品
  handleSelectProduct() {
    this.props.selectProduct(this.props.product.id);
  }
  
  // 商品数量减一
  handleSubAmount() {
    --this.amounts.value;
    
    if(this.amounts.value <= -1) {
      this.amounts.value = 0;
    }
    
    this.handleChangeAmounts();
  }
  
  // 商品数量加一
  handleAddAmount() {
   ++this.amounts.value;
   this.handleChangeAmounts();
  }
  
  // 移除该商品
  handleProductRemove() {
    let id = this.props.product.id;
    this.props.removeProduct(id);
  }
  
  // 更改商品数量
  handleChangeAmounts() {
    let id = this.props.product.id;
    let amounts = parseInt(this.amounts.value);
    let decriseIcon = ReactDOM.findDOMNode(this.amounts).previousElementSibling;
    
    // 商品数量为零时,不能再减少,颜色改为浅灰色
    decriseIcon.style.color = (amounts <= 0) ? '#c9c9c9' : '#68cb78';
    
    this.props.changeAmounts(id, amounts);
  }
  
  // 图片加载失败,隐藏掉
  handeImgError(e) {
    e.target.style.visibility = 'hidden';
  }
  
  // 图片加载完毕再显示图片
  handleLoaded(e) {
    e.target.style.visibility = 'visible';
  }
  
  render() {
    let product = this.props.product;
    let isSelected = product.isSelected;
    let amounts = product.descriptions.amounts;
    
    return (
      <div
        className="cart-product"
        style={{
          "borderColor":　isSelected ?
            "#fc0000" :
            "#f9f9f9"
        }}
      >
        <div
          className="select-product"
          onClick={this.handleSelectProduct}
          style={{
            "background": isSelected ?
              "#fc0000":
              "#f0f0f0"
          }}
        >
          <i className="iconfont icon-zhengque"/>
        </div>
        <div className="product-wrapper">
          <div className="info">
            <div className="info-basic clearfix">
              <a className="product-img" href="">
                <img className="photo"
                     src={product.photo_url}
                     alt={''}
                     onError={this.handeImgError}
                     onLoad={this.handleLoaded}
                />
              </a>
              <p className="title">
                <a href="">{product.title}</a>
              </p>
            </div>
            <div className="info-additional">
              <p>
                {"颜色: "}
                <span>{product.descriptions.color}</span>
                {"/ 尺寸: "}
                <span>{product.descriptions.size + '/ '}</span>
                <span className="price">
                  {"单价: ￥" + product.promote_price}
                </span>
              </p>
            </div>
          </div>
          <div className="amounts clearfix">
            <span className="">数量: </span>
            <div className="choose-amount">
              <i className="subAmount iconfont icon-jian"
                 onClick={this.handleSubAmount}
              />
              <input type="number"
                     defaultValue={amounts}
                     ref={input => this.amounts = input}
                     onChange={this.handleChangeAmounts}
              />
              <i
                className="addAmount iconfont icon-anonymous-iconfont-copy"
                 onClick={this.handleAddAmount} />
            </div>
          </div>
          <div className="price">
            <span>金额: </span>
            <span className="current-price">
              ${(product.promote_price * amounts).toFixed(2)}
            </span>
            <span className="market-price">
              ${(product.price * amounts).toFixed(2)}
            </span>
          </div>
        </div>
        <div className="remove-product">
          <button className="btn btn-remove" onClick={this.handleProductRemove}>删除</button>
        </div>
      </div>
    );
  }
}
