import React, { Component } from 'react'


export class NewsItem extends Component {
  render() {
    let {title , description , imgUrl , newsUrl} = this.props;
    return (
      <>
      <div className="my-3">
        <div className="card" style={{width : '18rem'}}>
            <img className="card-img-top" src={imgUrl} width={"298px"} height={"204px"} alt={imgUrl} />
            <div className="card-body">
                <h5 className="card-title">{title.substr(0, 10)}..</h5>
                <p className="card-text">{description.substr(0, 50)}..</p>
                <a href={newsUrl} target='_blank' className="btn btn-primary btn-sm">Read More</a>
            </div>
        </div>
      </div>
      </>
    )
  }
}
NewsItem.defaultProps = { 
  title: "This is a deafult title", 
  description: "This is a default description", 
  imgUrl: "https://placehold.co/286x180",
  newsUrl: "#"
} 

export default NewsItem 