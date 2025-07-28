import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
export class News extends Component {

  static defaultProps={
country:'in',
pageSize:8,
category:'general'
  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.string,
    category:PropTypes.string,

  }

  constructor() {
    super();
    console.log("Hello i am a console from news ");
    this.state = {
      articles: [],
      page: 1,
      loading: false,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4725e343a10e4997aa0e9d4a4540f427&page=1&pageSize=${this.props.pageSize}`;
     this.setState({loading:true})
    let data = await fetch(url);
    let parse = await data.json();

    this.setState({
      articles: parse.articles,
      totalResults: parse.totalResults,
      loading:false
    });
  }
  handlePrev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4725e343a10e4997aa0e9d4a4540f427&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
     this.setState({loading:true});
    console.log(9);
    let data = await fetch(url);
    let parse = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parse.articles,
       loading:false
    });
  };
  handleNext = async () => {
    if (!(
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    )) {
   
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4725e343a10e4997aa0e9d4a4540f427&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
       this.setState({loading:true});
      let data = await fetch(url);
      let parse = await data.json();

      this.setState({
        page: this.state.page + 1,
        articles: parse.articles,
        loading:false
      });
    }
  };
  // handleNext = async () => {
  //   if (
  //     this.state.page + 1 >
  //     Math.ceil(this.state.totalResults / this.props.pageSize)
  //   ) {
  //   } else {
  //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4725e343a10e4997aa0e9d4a4540f427&page=${
  //       this.state.page + 1
  //     }&pageSize=${this.props.pageSize}`;
  //      this.setState({loading:true});
  //     let data = await fetch(url);
  //     let parse = await data.json();

  //     this.setState({
  //       page: this.state.page + 1,
  //       articles: parse.articles,
  //       loading:false
  //     });
  //   }
  // };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">Top Headlines </h1>
        {this.state.loading && <Spinner/>}

        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 45) : ""
                  }
                  newsUrl={element.url}
                  imageUrl={element.urlToImage}
                  pub={element.publishedAt}
                  author={element.author}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            onClick={this.handlePrev}
            type="button"
            className="btn btn-dark"
          >
            {" "}
            &larr; Prev
          </button>
          <button
            onClick={this.handleNext}
            type="button"
            className="btn btn-dark"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
