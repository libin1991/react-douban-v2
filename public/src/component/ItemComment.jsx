import React, {Component} from 'react'

export default class ItemComment extends Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    let comment = this.props.comment;
    let author = comment.author;
    
    return (
      <div className="discuss-wrapper">
        <div className="author-subnail" href="">
          <img src={author.avatar} alt=""/>
        </div>
        <div className="discuss-contents">
            <div className="author">
              <span className="author-name">{author.name}</span>
              <span className="discuss-time">{author.create_time}</span>
            </div>
            <div className="content">
              <p className="author-content">
                {comment.text}
              </p>
              <ul className="subnail-wrapper">
                {
                  comment.album_photos.map((img, index) => {
                    return <li key={index} className="item">
                             <img  src={img.small_url} alt="img"/>
                           </li>;
                  })
                }
              </ul>
            </div>
        </div>
      </div>
    )
  }
}
