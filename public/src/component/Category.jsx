
import React, { Component } from 'react'
import Header from './Header.jsx'


export default class Category extends Component {
  
  render() {
    
    let categories = [
      {
        name: '饮食',
        id: 0,
        style: {
          'background': '#ffb2bb'
        }
      },
      {
        name: '服装',
        id: 1,
        style: {
          'background': '#89b7ec'
        }
      },
      {
        name: '配饰',
        id: 2,
        style: {
          'background': '#c2ace0'
        }
      },
      {
        name: '包袋',
        id: 3,
        style: {
          'background': '#b2f6ff'
        }
      },
      {
        name: '鞋靴',
        id: 4,
        style: {
          'background': '#e6e7a4'
        }
      },
      {
        name: '美容护肤',
        id: 5,
        style: {
          'background': '#e0a0d1'
        }
      },
      {
        name: '家居',
        id: 6,
        style: {
          'background': '#b2ffc5'
        }
      },
      {
        name: '时间',
        id: 7,
        style: {
          'background': '#b1c7a4'
        }
      },
      {
        name: '3C数码',
        id: 8,
        style: {
          'background': '#ffb2bb'
        }
      }
    ];
    return (
      <div>
        <Header />
        <div className="site-category">
          <div className="category-wrapper">
            {
              categories.map((item,index) =>
                <div
                  key={item.id}
                  className="category-item"
                  style={item.style}
                >
                  {item.name}
                </div>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}




