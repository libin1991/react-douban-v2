import React from 'react';
import 'es6-promise'
import 'isomorphic-fetch'

import Header from './Header.jsx'
import Slider from './carousel/Slider.jsx'
import ProductView from './ProductView.jsx'
import Store from './Store.jsx'


export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      configData: [],
      shopsData: {}
    };
  }
  
  componentWillMount() {
    fetch('./config.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          configData: data
        });
      })
      .catch(e => new Error('file not found.'));
    
    fetch('./shops.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          shopsData: data
        });
      })
      .catch(e => new Error('file not found.'));
  }
  
  render() {
    let datas = this.state.configData;
    let shopsData = this.state.shopsData;
    return (
      <div>
        <Header />
        <div className="site-main">
          {
            datas.map((obj, i) => {
              if (i === 0) {
                return (
                  /*carousel*/
                  <div key={obj.key} className="carousel">
                    <Slider
                      items={obj.data.photos}
                      speed={1}
                      autoplay={true}
                      dots={true}
                    />
                  </div>
                )
              }
              else if (i === 1) {
                // 首屏显示的商品
                return (
                  <div
                    key={obj.key}
                    className="main-products-wrapper">
                    {
                
                      obj.data.contents.map((product) => {
                        return product.data.skus.map((productObj) => {
                          return (
                            <ProductView item={productObj}/>
                          );
                        })
                      })
                    }
                  </div>
                );
              }
            })
          }
    
          <div className="shops-wrapper">
            {
              shopsData.data && shopsData.data.shops.map((shop) => {
                return <Store key={shop.id} shop={shop}/>
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
