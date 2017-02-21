import React from 'react'

export default class SliderItem extends React.Component {
  
  constructor(props) {
    super(props);
    
   
  }
  
  
  render() {
    let { item, count } = this.props;
    let width = 100 / count + '%'; // 每个轮播项应该是满屏的，父组件的宽度为各子组件的和
    return (
      <div
        className="slider-item"
        style={{
          width: width,
          backgroundImage: "url(" + item.src + ")",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center"
        }}
      >
        {/*<img src={item.src} alt={item.title}/>*/}
      </div>
    );
  }
}




