import React, {Component} from 'react'
import './slider.css'

export default class Slider extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="slider">
        <div className="slider">
          <div
            className="slider-wrapper"
            style={{
              left: '0',
            }}
          >
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
