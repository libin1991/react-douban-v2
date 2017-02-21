import React, { Component } from 'react'

export default class SliderDots extends Component {
  constructor(props) {
    super(props);
    
  }
  
  handleDotClick(index) {
    console.log(index);
    let option = index - this.props.activeDot;
    this.props.skip(option);
  }
  
  render() {
    
    let dots = [];
    let { count, activeDot } = this.props;
    for(let i = 0; i < count; i++) {
      dots[i] = (
        <span
          key={'dot' + i}
          className={"slider-dot" + (i === activeDot ? ' slider-dot-active' : '')}
          onClick={this.handleDotClick.bind(this,i)}
        />
      );
    }
    
    return (
      
      <div className="slider-dots-wrapper">
        {dots}
      </div>
    );
  }
}
