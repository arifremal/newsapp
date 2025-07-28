import React, { Component } from "react";

export class NewsItem extends Component {

  render() {
    let { title, description,imageUrl,newsUrl,pub,author,source } = this.props;
    return (
     <div className="my-3">
       <div className="card" >
        <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}} >
    {source}
   
  </span>
        <img src={!imageUrl?"https://nypost.com/wp-content/uploads/sites/2/2025/07/108766196.jpg?quality=75&strip=all&w=1024":imageUrl} className="card-img-top " alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
           <br />
          {/* <h6>Published {pub}</h6> */}
                <p class="card-text"><small class="text-muted">by {!author ?  "AR" : author} on {new Date(pub).toGMTString()}</small></p>

          <a href={newsUrl} target="_blank" className="btn btn-dark btn-sm">
            Read More{" "}
          </a>
        </div>
      </div>
     </div>
    );
  }
}

export default NewsItem;
