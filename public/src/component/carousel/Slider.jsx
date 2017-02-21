/**
 * 配置项：
 * items  --> 要轮播的元素。对象数组，每个元素都是一个对象，有src和alt属性
   speed  --> 轮播的速度。单位s
   delay  --> 延迟。单位s
   autoplay --> 是否自动轮播。Boolean
   dots     --> 分页器。Boolean
 */

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import SliderItem from './slideritem/SliderItem.jsx'
import SliderDots from './sliderdots/SliderDots.jsx'

import './slider.css'

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDot: 0
    };
    
    this.handleSkip = this.handleSkip.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
  }
  
  handleSkip(n) {
    let _n = this.state.activeDot + n;
    
    if(_n < 0) {
      _n = this.props.items.length + _n;
    }
    if(_n > this.props.items.length -1) {
      _n = _n - this.props.items.length;
    }
    this.setState({
      activeDot: _n
    });
  }
  
  handeAutoPlay() {
    
    if(this.props.autoplay) {
      clearInterval(this.playTimer);
      this.playTimer = setInterval(() => {
          this.handleSkip(1);
        }
      , this.props.delay * 1000);
    }
  }
  
  componentDidMount() {
    this.handeAutoPlay();
  }
  componentWillUnmount() {
    clearInterval(this.playTimer);
  }
  
  // 触屏事件
  /**
   * 用户开始触屏，停止自动轮播
   * 首先通过事件对象e获得用户与触摸平面的接触点。
   * e.changedTouches 返回Touchlist，单点触摸时，只包含一个Touch对象。
   * 然后获取touch点在页面上的偏移值。
   * 获取容器的左侧定位偏移量（left值）
   * @param e
   */
  handleTouchStart(e) {
    clearInterval(this.playTimer);
    
    let touch = e.changedTouches[0];
    
    this.touchMoveOffset = touch.pageX;
    
    this.originListOffsetLeft = ReactDOM.findDOMNode(this.imgLists).offsetLeft;
    
  }
  
  /**
   * 触摸过程中，首先获取当前移动的像素数。用以计算容器的偏移量。
   * 取消left的过渡效果，使触摸效果及时响应。
   * @param e
   */
  handleTouchMove(e) {
    let touch = e.changedTouches[0];
    let offsetLeft = this.touchMoveOffset - touch.pageX;
    
    this.imgLists.style.transition = 'none 1s ease';
    
    this.imgLists.style.left = this.originListOffsetLeft - offsetLeft + 'px';
    
  }
  
  /**
   * 触摸结束：
   *  重新设置left的过渡效果。
   *  当前活动的图片如果是第一张，并且用户继续向右滑动，此时不再滑到下一张图，并设置一个回弹的效果。（this.imgLists.style.left = '0px'）
   *  当前活动的图片是最后一张，并且用户继续向左滑动，同理不再切换下一张图片。
   *  重新启动轮播
   * @param e
   */
  handleTouchEnd(e) {
    this.imgLists.style.transition = 'left 1s ease';
    
    let touch = e.changedTouches[0];
  
    let offset = this.touchMoveOffset - touch.screenX;
    
    let activeDot = this.state.activeDot;
    if(offset >= 0) {
      if(activeDot !== this.props.items.length - 1) {
        // 向左滑动
        this.handleSkip(1);
      }
      else {
        this.imgLists.style.left = -100 * this.state.activeDot + '%';
      }
    }
    if(offset < 0) {
      if(activeDot !== 0) {
        // 向右滑动
        this.handleSkip(-1);
      }
      this.imgLists.style.left = '0px';
    }
  
    this.handeAutoPlay();
  }
  
  render() {
    let count = this.props.items.length;
    
    let itemNodes = this.props.items.map((item, index) =>
      <SliderItem key={'item' + index} item={item} count={count} />
    );
    
    let dotsNodes = <SliderDots skip={this.handleSkip} count={count} activeDot={this.state.activeDot}/>;
    
    return (
      <div
        className="slider"
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
      >
        <div
          className="slider-wrapper"
          style={{
            left: -100 * this.state.activeDot + '%',
            transitionDuration: this.props.speed + 's',
            width: this.props.items.length * 100 + '%'
          }}
          ref={(list) => this.imgLists = list}
        >
          {itemNodes}
        </div>
        {this.props.dots ? dotsNodes : null}
      </div>
    );
  }
}

Slider.defaultProps = {
  speed: 1,
  delay: 2,
  autoPlay: true,
  dots: true,
  items: []
};
