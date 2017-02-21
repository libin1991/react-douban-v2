/**
 * 单个商品详情组件
 */


import  React, {Component} from 'react'
import {Link, IndexLink} from 'react-router'
import 'isomorphic-fetch'

import Slider from './carousel/Slider.jsx'
import ItemComment from './ItemComment.jsx'

// 商品的一些配置属性
let saleProps = {
  color: '天空蓝',
  color_name: '颜色',
  colors: [
    '天空蓝'
  ],
  disable_colors: [],
  disable_sizes: [],
  pre_sale_display: '',
  size: 's',
  size_name: '尺寸',
  sizes: [
    's',
    'm',
    'l'
  ]
};
// 商品的详细信息
let item = {
  "is_onsale": true,
  "description": "",
  "title": "PISN 极简高冷 高端侧开叉加厚女高领宽松套头羊毛衫",
  "color": "棕驼",
  "price": "289.00",
  "size": "l",
  "pics": [
    {
      src: "./static/img/item/p556187.jpg",
      title: "images"
    },
    {
      src: "./static/img/item/p556198.jpg",
      title: "images"
    },
    {
      src: "./static/img/item/p556189.jpg",
      title: "images"
    },
    {
      src: "./static/img/item/p556202.jpg",
      title: "images"
    },
    {
      src: "./static/img/item/p556191.jpg",
      title: "images"
    },
    {
      src: "./static/img/item/p556193.jpg",
      title: "images"
    },
    {
      src: "./static/img/item/p556196.jpg",
      title: "images"
    }
  ],
  "market_price": "359.00",
  "product_id": 33758,
  "info_photos": [
    "./static/img/item/p556181.jpg",
    "./static/img/item/p556182.jpg",
    "./static/img/item/p556183.jpg",
    "./static/img/item/p556184.jpg",
    "./static/img/item/p556185.jpg",
    "./static/img/item/p556186.jpg",
    "./static/img/item/p556187.jpg",
    "./static/img/item/p556188.jpg",
    "./static/img/item/p556189.jpg",
    "./static/img/item/p556190.jpg",
    "./static/img/item/p556191.jpg",
    "./static/img/item/p556192.jpg",
    "./static/img/item/p556193.jpg",
    "./static/img/item/p556194.jpg",
    "./static/img/item/p556195.jpg",
    "./static/img/item/p556196.jpg",
    "./static/img/item/p556197.jpg",
    "./static/img/item/p556198.jpg",
    "./static/img/item/p556199.jpg",
    "./static/img/item/p556200.jpg",
    "./static/img/item/p556201.jpg",
    "./static/img/item/p556202.jpg",
    "./static/img/item/p556203.jpg",
    "./static/img/item/p556204.jpg",
    "./static/img/item/p556205.jpg"
  ],
  "short_description": "",
  "stock": 99,
  "id": 111370,
  "promote_price": "289.00",
  "delivery_detail": [
    {
      "send_type": 0,
      "add_standards": "1",
      "start_fees": "0.00",
      "template_id": 1322,
      "start_standards": "1",
      "dests": "ALL",
      "add_fees": "0.00",
      "id": 1857,
      "place_name": "全国"
    },
    {
      "send_type": 0,
      "add_standards": "1",
      "start_fees": "6.00",
      "template_id": 1322,
      "start_standards": "1",
      "dests": "31\/32\/33\/",
      "add_fees": "4.00",
      "id": 4283,
      "place_name": "上海市\/江苏省\/浙江省\/"
    },
    {
      "send_type": 0,
      "add_standards": "1",
      "start_fees": "10.00",
      "template_id": 1322,
      "start_standards": "1",
      "dests": "11\/12\/13\/14\/15\/21\/22\/23\/34\/35\/36\/37\/41\/42\/43\/44\/45\/46\/50\/51\/52\/53\/54\/61\/62\/63\/64\/",
      "add_fees": "8.00",
      "id": 4284,
      "place_name": "北京市\/天津市\/河北省\/山西省\/内蒙古自治区\/辽宁省\/吉林省\/黑龙江省\/安徽省\/福建省\/江西省\/山东省\/河南省\/湖北省\/湖南省\/广东省\/广西壮族自治区\/海南省\/重庆市\/四川省\/贵州省\/云南省\/西藏自治区\/陕西省\/甘肃省\/青海省\/宁夏回族自治区\/"
    },
    {
      "send_type": 0,
      "add_standards": "1",
      "start_fees": "18.00",
      "template_id": 1322,
      "start_standards": "1",
      "dests": "65\/",
      "add_fees": "12.00",
      "id": 4285,
      "place_name": "新疆维吾尔自治区\/"
    }
  ],
  "comments": "15"
};

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saleProps,
      item,
      itemContents: null // 显示的内容为点击的内容-->详情/评价/讨论
    };
    this.handleShowDetails = this.handleShowDetails.bind(this);
    this.handleShowComments = this.handleShowComments.bind(this);
    this.handleShowDiscuss = this.handleShowDiscuss.bind(this);
  }
  
  componentWillMount() {
    let itemPics = item.info_photos.map((pic, index) => {
      return <img key={index} className="item-info-pic" src={pic} alt="images"/>
    });
    this.setState({
      item: item,
      itemContents: itemPics
    });
  }
  
  // 显示商品详情
  handleShowDetails(e) {
    
    let contents =
      <div className="item-details">
        {
          this.state.item.info_photos.map((pic, index) => {
            return <img key={index} className="item-info-pic" src={pic} alt="images"/>
          })
        }
      </div>;
    this.setState({
      itemContents: contents
    });
  }
  
  // 显示商品评论
  handleShowComments() {
    let contents = null;
    // 获取评论信息
    fetch('./comments.json')
      .then(res => res.json())
      .then(datas => {
        contents =
          <div className="item-comments">
            {
              datas.data.map((comment, index) => {
                return <ItemComment key={index} comment={comment}/>
              })
            }
          </div>;
        this.setState({
          itemContents: contents
        });
      })
      .catch(e => new Error(e));
  }
  
  // 显示讨论区
  handleShowDiscuss() {
    let contents = <div className="item-discuss">这是讨论区, 目前为空...</div>;
    
    this.setState({
      itemContents: contents
    });
  }
  
  render() {
    let item = this.state.item;
    let pics = item.pics;
    
    let colors = saleProps.colors.map((color, index) => {
      return <span key={index} className="descrip-item">{color}</span>
    });
    let sizes = saleProps.sizes.map((size, index) => {
      return <span key={index} className="descrip-item">{size}</span>
    });
    
    let contents = this.state.itemContents;
    
    // 该商品的评论数
    let itemCommentsLength = this.state.item.comments;
      
    return (
      <div className="item-container">
        <Link to="/" className="back">回到首页</Link>
        <div className="item-main">
          <div className="header">
            <div className="item-pics">
              <Slider
                items={pics}
                speed={1.2}
                autoplay={true}
                dots={true}
              />
            </div>
            <div className="item-info-wrapper">
              <div className="item-title">
                {item.title}
              </div>
              <div className="item-price">
                <span className="price">
                  {'￥' + item.price}
                </span>
                <span
                  className="market-price"
                >
                  {'￥' + item.market_price}
                </span>
              </div>
              <div className="delivery">
                <span className="delivery-cast">
                  运费: {'￥0.00'}
                </span>
                <span className="not-delivery">非包邮区域</span>
              </div>
              <div className="like-item">
                <i className="like iconfont icon-jushoucang"/>
                <i className="mail iconfont icon-wodehongbao"/>
              </div>
            </div>
            <div className="item-descriptions">
              <div className="descrips">
                <div className="colors">
                  <div className="color-title">
                    {saleProps.color_name + ': '}
                  </div>
                  <div className="color-items">
                    {colors}
                  </div>
                </div>
                <div className="sizes">
                  <div className="size-title">
                    {saleProps.size_name + ': '}
                  </div>
                  <div className="size-items">
                    {sizes}
                  </div>
                </div>
              </div>
              <div className="amounts">
                <div className="amounts-title">
                  {"数量: "}
                </div>
                <div className="select-amounts">
                  <i className="subAmount iconfont icon-jian"
                     onClick={this.handleSubAmount}
                  />
                  <input type="number"
                         defaultValue={1}
                         ref={input => this.amounts = input}
                         onChange={this.handleChangeAmounts}
                  />
                  <i
                    className="addAmount iconfont icon-anonymous-iconfont-copy"
                    onClick={this.handleAddAmount}/>
                </div>
              </div>
            </div>
            <div className="item-confirm">
              <span>豆瓣市集担保</span>
              <span>七天无理由退货</span>
              <span>正品保证</span>
              <span>独立品牌</span>
            </div>
          </div>
          {/*商品详情/评价/讨论部分*/}
          <div className="content-details">
            <div className="content-nav">
              <span
                className="nav-item active"
                onClick={this.handleShowDetails}
              >商品详情</span>
              <span
                className="nav-item"
                onClick={this.handleShowComments}
              >评价{"(" + itemCommentsLength + ")"}</span>
              <span
                className="nav-item"
                onClick={this.handleShowDiscuss}
              >讨论</span>
            </div>
            <div className="content-wrapper">
              {contents}
            </div>
          </div>
          <div className="item-footer">
            <div className="shop-help">
              <a className="contact-douban fr" href="">联系豆瓣</a>
              <a href="">购物说明</a>
              <span>|</span>
              <a href="">帮助</a>
            </div>
            <div className="go-shop">
              逛逛
              <Link className="home" to="/">豆瓣市集</Link>
            </div>
          </div>
        </div>
        
        {/*固定的底部*/}
        <div className="fixed-bar">
          <div className="item__shop">
            <a className="item__store" href=""><i className="iconfont icon-shouye"/></a>
            <a className="item__cart" href=""><i className="iconfont icon-gouwuche"/></a>
          </div>
          <div className="item__buy">
            <a className="item__buy--add" href="">加购物车</a>
            <a className="item__buy--now" href="">立即购买</a>
          </div>
        </div>
      </div>
    );
  }
}

