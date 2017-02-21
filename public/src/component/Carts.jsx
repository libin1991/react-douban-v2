import React from 'react'

import Header from './Header.jsx'
import CartsShop from './CartsShop.jsx'

/**
 *  APP父组件,应该持有一个carts state[对象数组],当点击显示购物车时,
 *  Cart组件接受该state,并对其遍历。
 *  将一个商品添加到购物车时，应该同时保存店铺ID
 */
// 模拟一个数据
let products = [
  {
    "index": 0,
    "name": "\u5c0f\u5de8\u86cb\u5e02\u96c6",
    "url": "https://market.douban.com/miniteaset/",
    "id": 12572,
    "selectThisShop": false,
    "skus": [
      {
        "product_id": 33340,
        "shop_url": "https://market.douban.com/miniteaset/",
        "title": "\u5c0f\u5de8\u86cb\u793c\u76d2\u7248\uff08\u5927\u7ea2\u888d&\u94c1\u89c2\u97f3\uff09\u8336\u53f6\u5305\u88c5",
        "url": "https://market.douban.com/item/108171/",
        "price": "498.00",
        "shop_name": "\u5c0f\u5de8\u86cb\u5e02\u96c6",
        "market_price": "996.00",
        "recommend": null,
        "price_couple": [
          "473.1",
          "498.00"
        ],
        "promote_price": "473.1",
        "id": 108171,
        "photo_url": "https://img3.doubanio.com/view/dianpu_product_item/large/public/p548040.jpg",
        "descriptions": {
          "color": "深红",
          "size": "36",
          "amounts": 1
        },
        "isSelected": false
      },
      {
        "product_id": 28726,
        "shop_url": "https://market.douban.com/miniteaset/",
        "title": "\u5c0f\u5de8\u86cbT1\u4fbf\u643a\u5f0f\u8336\u5177\u793c\u54c1\u5957\u88c5\u7802\u5ca9\u91c9\u8336\u76d2\u7248\uff08\u6781\u5ba2\u9ed1\uff09",
        "url": "https://market.douban.com/item/90190/",
        "price": "368.00",
        "shop_name": "\u5c0f\u5de8\u86cb\u5e02\u96c6",
        "market_price": "736.00",
        "recommend": null,
        "price_couple": [
          "368.00",
          "736.00"
        ],
        "promote_price": "368.00",
        "id": 90190,
        "photo_url": "https://img1.doubanio.com/view/dianpu_product_item/medium/public/p449949.jpg",
        "descriptions": {
          "color": "深红",
          "size": "36",
          "amounts": 1
        },
        "isSelected": false
      },
      {
        "product_id": 28723,
        "shop_url": "https://market.douban.com/miniteaset/",
        "title": "\u5c0f\u5de8\u86cbT1\u4fbf\u643a\u5f0f\u8336\u5177\u793c\u54c1\u5957\u88c5\u5206\u4eab\u7248\u7802\u5ca9\u91c9\u6781\u5ba2\u9ed1",
        "url": "https://market.douban.com/item/90184/",
        "price": "498.00",
        "shop_name": "\u5c0f\u5de8\u86cb\u5e02\u96c6",
        "market_price": "996.00",
        "recommend": null,
        "price_couple": [
          "498.00",
          "996.00"
        ],
        "promote_price": "498.00",
        "id": 90184,
        "photo_url": "https://img3.doubanio.com/view/dianpu_product_item/medium/public/p449970.jpg",
        "descriptions": {
          "color": "深红",
          "size": "36",
          "amounts": 1
        },
        "isSelected": false
      },
      {
        "product_id": 28735,
        "shop_url": "https://market.douban.com/miniteaset/",
        "title": "\u5c0f\u5de8\u86cbT1\u4fbf\u643a\u5f0f\u8336\u5177\u793c\u54c1\u5957\u88c5\u5362\u74e6\u5c14\u8336\u76d2\u7248\uff08\u6781\u5ba2\u9ed1\uff09",
        "url": "https://market.douban.com/item/90212/",
        "price": "368.00",
        "shop_name": "\u5c0f\u5de8\u86cb\u5e02\u96c6",
        "market_price": "736.00",
        "recommend": null,
        "price_couple": [
          "349.6",
          "368.00"
        ],
        "promote_price": "349.6",
        "id": 90212,
        "photo_url": "https://img1.doubanio.com/view/dianpu_product_item/medium/public/p450089.jpg",
        "descriptions": {
          "color": "深红",
          "size": "36",
          "amounts": 1
        },
        "isSelected": false
      }
    ],
  },
  {
    "index": 1,
    "name": "\u5c0f\u5de8\u86cb\u5e02\u96c6",
    "url": "https://market.douban.com/miniteaset/",
    "id": 12573,
    "selectThisShop": false,
    "skus": [
      {
        "product_id": 33340,
        "shop_url": "https://market.douban.com/miniteaset/",
        "title": "\u5c0f\u5de8\u86cb\u793c\u76d2\u7248\uff08\u5927\u7ea2\u888d&\u94c1\u89c2\u97f3\uff09\u8336\u53f6\u5305\u88c5",
        "url": "https://market.douban.com/item/108171/",
        "price": "498.00",
        "shop_name": "\u5c0f\u5de8\u86cb\u5e02\u96c6",
        "market_price": "996.00",
        "recommend": null,
        "price_couple": [
          "473.1",
          "498.00"
        ],
        "promote_price": "473.1",
        "id": 108171,
        "photo_url": "https://img3.doubanio.com/view/dianpu_product_item/large/public/p548040.jpg",
        "descriptions": {
          "color": "深红",
          "size": "36",
          "amounts": 1
        },
        "isSelected": false
      },
      {
        "product_id": 28726,
        "shop_url": "https://market.douban.com/miniteaset/",
        "title": "\u5c0f\u5de8\u86cbT1\u4fbf\u643a\u5f0f\u8336\u5177\u793c\u54c1\u5957\u88c5\u7802\u5ca9\u91c9\u8336\u76d2\u7248\uff08\u6781\u5ba2\u9ed1\uff09",
        "url": "https://market.douban.com/item/90190/",
        "price": "368.00",
        "shop_name": "\u5c0f\u5de8\u86cb\u5e02\u96c6",
        "market_price": "736.00",
        "recommend": null,
        "price_couple": [
          "368.00",
          "736.00"
        ],
        "promote_price": "368.00",
        "id": 90190,
        "photo_url": "https://img1.doubanio.com/view/dianpu_product_item/medium/public/p449949.jpg",
        "descriptions": {
          "color": "深红",
          "size": "36",
          "amounts": 1
        },
        "isSelected": false
      },
      {
        "product_id": 28723,
        "shop_url": "https://market.douban.com/miniteaset/",
        "title": "\u5c0f\u5de8\u86cbT1\u4fbf\u643a\u5f0f\u8336\u5177\u793c\u54c1\u5957\u88c5\u5206\u4eab\u7248\u7802\u5ca9\u91c9\u6781\u5ba2\u9ed1",
        "url": "https://market.douban.com/item/90184/",
        "price": "498.00",
        "shop_name": "\u5c0f\u5de8\u86cb\u5e02\u96c6",
        "market_price": "996.00",
        "recommend": null,
        "price_couple": [
          "498.00",
          "996.00"
        ],
        "promote_price": "498.00",
        "id": 90184,
        "photo_url": "https://img3.doubanio.com/view/dianpu_product_item/medium/public/p449970.jpg",
        "descriptions": {
          "color": "深红",
          "size": "36",
          "amounts": 1
        },
        "isSelected": false
      },
    ],
  },
  {
    "index": 2,
    "name": "\u5c0f\u5de8\u86cb\u5e02\u96c6",
    "url": "https://market.douban.com/miniteaset/",
    "sid": "miniteaset",
    "id": 12574,
    "selectThisShop": false,
    "skus": [
      {
        "product_id": 33340,
        "shop_url": "https://market.douban.com/miniteaset/",
        "title": "\u5c0f\u5de8\u86cb\u793c\u76d2\u7248\uff08\u5927\u7ea2\u888d&\u94c1\u89c2\u97f3\uff09\u8336\u53f6\u5305\u88c5",
        "url": "https://market.douban.com/item/108171/",
        "price": "498.00",
        "shop_name": "\u5c0f\u5de8\u86cb\u5e02\u96c6",
        "market_price": "996.00",
        "recommend": null,
        "price_couple": [
          "473.1",
          "498.00"
        ],
        "promote_price": "473.1",
        "id": 108171,
        "photo_url": "https://img3.doubanio.com/view/dianpu_product_item/large/public/p548040.jpg",
        "descriptions": {
          "color": "深红",
          "size": "36",
          "amounts": 1
        },
        "isSelected": false
      },
      {
        "product_id": 28726,
        "shop_url": "https://market.douban.com/miniteaset/",
        "title": "\u5c0f\u5de8\u86cbT1\u4fbf\u643a\u5f0f\u8336\u5177\u793c\u54c1\u5957\u88c5\u7802\u5ca9\u91c9\u8336\u76d2\u7248\uff08\u6781\u5ba2\u9ed1\uff09",
        "url": "https://market.douban.com/item/90190/",
        "price": "368.00",
        "shop_name": "\u5c0f\u5de8\u86cb\u5e02\u96c6",
        "market_price": "736.00",
        "recommend": null,
        "price_couple": [
          "368.00",
          "736.00"
        ],
        "promote_price": "368.00",
        "id": 90190,
        "photo_url": "https://img1.doubanio.com/view/dianpu_product_item/medium/public/p449949.jpg",
        "descriptions": {
          "color": "深红",
          "size": "36",
          "amounts": 1
        },
        "isSelected": false
      },
      {
        "product_id": 28723,
        "shop_url": "https://market.douban.com/miniteaset/",
        "title": "\u5c0f\u5de8\u86cbT1\u4fbf\u643a\u5f0f\u8336\u5177\u793c\u54c1\u5957\u88c5\u5206\u4eab\u7248\u7802\u5ca9\u91c9\u6781\u5ba2\u9ed1",
        "url": "https://market.douban.com/item/90184/",
        "price": "498.00",
        "shop_name": "\u5c0f\u5de8\u86cb\u5e02\u96c6",
        "market_price": "996.00",
        "recommend": null,
        "price_couple": [
          "498.00",
          "996.00"
        ],
        "promote_price": "498.00",
        "id": 90184,
        "photo_url": "https://img3.doubanio.com/view/dianpu_product_item/medium/public/p449970.jpg",
        "descriptions": {
          "color": "深红",
          "size": "36",
          "amounts": 1
        },
        "isSelected": false
      },
    ],
  }
];

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: 0,
      totalAmounts: 0,
      selectAll: false,
      allProducts: []
    };
    this.handleSelectAll = this.handleSelectAll.bind(this);
    this.handleSelectShop = this.handleSelectShop.bind(this);
    this.handleSelectProduct = this.handleSelectProduct.bind(this);
    this.handleChangeAmounts = this.handleChangeAmounts.bind(this);
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
    this.handleComputePayments = this.handleComputePayments.bind(this);
    this.handleCartStatusChange = this.handleCartStatusChange.bind(this);
  }
  
  //
  componentWillMount() {
    this.setState({
      allProducts: [
        ...products
      ]
    });
  }
  
  /**
   * 对于每一个加入购物车的商品，
   *  检查购物车中是否存在该店铺，如果是，
   *    检查其是否已存在，如果是，
   *      检查该商品的附加信息是否有更改，如果有
   *        在该店铺中添加该商品，
   *      附加信息没有更新，则只更新其数量
   *    该店铺中不存在该商品，则添加该商品
   *   该商品所在店铺并没有任何商品存在，创建包含该店铺商品的对象，并添加该商品
   * @param nextProps
   */
  componentWillReceiveProps(nextProps) {
    let prevProducts = this.state.allProducts; // 原购物车 --> 一维对象数组
    let newAddProduct = nextProps.product; // 商品对象，包含店铺，附加信息等
    
    console.log(newAddProduct);
    
    let newProducts = prevProducts.map(shop => {
      // 该商品所在店铺在购物车中已存在
      if (shop.id === newAddProduct.shop_id) {
        let skus = shop.skus; // 以添加到店铺中的所有商品
        skus.forEach(product => {
          let prevDescrip = product.descriptions;
          let newDescrip = newAddProduct.descriptions;
          
          // 添加了同一个商品，
          if (newAddProduct.id === product.id) {
            for (let attr in newDescrip) {
              if (attr && prevDescrip[attr] !== newDescrip[attr]) {
                // 更改的不是商品数,则添加该商品
                if (attr !== 'amounts') {
                  skus.push(newAddProduct);
                }
                else {
                  //如果只是更改了商品数量，则更新商品数量
                  prevDescrip.amounts += newDescrip.amounts;
                }
              }
              else if (attr === 'amounts') {
                // 如果添加了一个完全一样的商品，更新商品数
                prevDescrip.amounts += newDescrip.amounts;
              }
            }
          }
          else {
            // 添加了的是新商品
            skus.push(newAddProduct);
          }
        });
      }
      
      return shop;
    });
    
    // 添加的是一个新店铺中的商品时,添加该店铺，和商品
    newProducts.unshift({
      "name": newAddProduct.shop_name,
      "url": newAddProduct.shop_url,
      "id": newAddProduct.shop_id,
      "skus": [
        Object.assign({}, newAddProduct)
      ]
    });
    
    // 商品更新完毕，更新购物车
    this.setState({
      allProducts: [
        ...newProducts
      ]
    })
  }
  
  // 选择购物车中的所有商品
  handleSelectAll(e) {
    e.preventDefault();
    let carts = this.state.allProducts;
    let selectAll = !this.state.selectAll;
    carts.forEach(shop => {
      shop.selectThisShop = selectAll;
      shop.skus.forEach(product => {
        product.isSelected = selectAll;
      })
    });
  
    this.setState({
      allProducts: [
        ...carts
      ],
      selectAll
    });
    
    this.handleComputePayments();
  }
  
  // 处理选中一个店铺中的所有商品
  handleSelectShop(shop_id) {
    let newCart = this.state.allProducts.map((shop) => {
      if (shop.id === shop_id) {
        shop.selectThisShop = !shop.selectThisShop;
        shop.skus.map((product, pi) => {
          shop.skus[pi].isSelected = shop.selectThisShop;
        })
      }
      return shop;
    });
    
    this.setState({
      allProducts: [
        ...newCart
      ]
    });
    
    this.handleComputePayments();
    this.handleCartStatusChange();
  }
  
  // 处理选中一个商品
  handleSelectProduct(shop_id, id) {
    let newCart = this.state.allProducts.map(shop => {
      if (shop.id === shop_id) {
        shop.selectThisShop = true;
        shop.skus.map(product => {
          if (product.id === id) {
            product.isSelected = !product.isSelected;
          }
           
          // 如果有一个商品没有选中,则取消选中这个店铺
          if (!product.isSelected) {
            shop.selectThisShop = false;
          }
        })
      }
      return shop;
    });
    
    this.setState({
      allProducts: [
        ...newCart
      ]
    });
    
    this.handleComputePayments();
    this.handleCartStatusChange();
  }
  
  // 计算选中的商品的总价
  handleComputePayments() {
    let totalAmounts = 0;
    let totalPrice = 0;
    
    this.state.allProducts.forEach(shop => {
      shop.skus.forEach(product => {
        if (product.isSelected) {
          ++totalAmounts;
          let amounts = product.descriptions.amounts;
          totalPrice += amounts * product.promote_price;
        }
      })
    });
    
    this.setState({
      totalAmounts,
      totalPrice
    });
    
  }
  
  /**
   * 移除购物车中的一个商品
   *  移除指定店铺里的某个指定的商品，如果店铺中没有商品了，在购物车中移除该店铺
   *  （如果购物车空了，显示提示浏览商品界面）
   * @param shop_id 店铺id
   * @param id 商品id
   */
  handleRemoveProduct(shop_id, id) {
    let oldCart = this.state.allProducts;
    oldCart.forEach((shop, si) => {
      if (shop.id === shop_id) {
        shop.skus.forEach((product, pi) => {
          if (product.id === id) {
            shop.skus.splice(pi, 1);
          }
        });
        // 店铺内没有商品时，移除该店铺
        if(shop.skus.length <= 0) {
          oldCart.splice(si, 1);
        }
      }
    });
    
    this.setState({
      allProducts: [
        ...oldCart
      ]
    });
    
    this.handleComputePayments();
  }
  
  // 处理商品数量的更改
  handleChangeAmounts(shop_id, id, amounts) {
    if(typeof amounts !== 'number') return;
    let newCart = this.state.allProducts.map((shop) => {
      if (shop.id === shop_id) {
        shop.skus.map((product, pi) => {
          if (product.id === id) {
            shop.skus[pi].descriptions.amounts = amounts;
          }
        })
      }
      return shop;
    });
    
    this.setState({
      allProducts: [
        ...newCart
      ]
    });
    
    this.handleComputePayments();
  }
  
  // 切换是否选中了购物车中的所有商品
  handleCartStatusChange() {
    let carts = this.state.allProducts;
    let selectAll = true;
    carts.forEach(shop => {
      shop.skus.forEach(product => {
        if(!product.isSelected) {
          selectAll = false;
        }
      })
    });
    this.setState({
      selectAll
    });
  }
  
  render() {
    let products = this.state.allProducts;
    let selectALl = this.state.selectAll;
    let productsLists = products.map((shop, index) =>
      <CartsShop
        key={index}
        shop={shop}
        selectThisShop={this.state.selectThisShop}
        selectProduct={this.handleSelectProduct}
        selectShop={this.handleSelectShop}
        removeProduct={this.handleRemoveProduct}
        changeAmounts={this.handleChangeAmounts}
      />
    );
    
    return (
      <div>
        <Header />
        <div className="carts">
          {productsLists}
          <div className="go-pay">
            <div className="left">
              <a className="select-all" href=""
                 onClick={this.handleSelectAll}
              >
                <i className={
                  "iconfont " + (this.state.selectAll ? "icon-wancheng" : "icon-radiobutton-copy")}/>
              </a>
              <span>{selectALl ? '取消全选' : '全选'}</span>
              <span>合计: </span>
              <span className="total-price">
              {'￥' + this.state.totalPrice.toFixed(2)}
            </span>
            </div>
            <div className="right">
              <span>去结算</span>
              <span>( {this.state.totalAmounts} )</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}




