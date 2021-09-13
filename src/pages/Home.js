import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Article from "../components/Article";
import Loader from "../components/Loader";
import { getArticles } from "../redux/actions/article";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getArticles } = this.props;
    getArticles(30);
  }

  onArticleClicked = ({ url }) => {
    window.open(url, "_blank");
  };

  render() {
    const { loading, articles } = this.props;

    return (
      <div>
        {loading ? (
          <Loader />
        ) : (
          <div className="content-grid">
            {articles
              ? articles.map((article) => (
                  <Article
                    key={article.id}
                    {...article}
                    onArticleClicked={this.onArticleClicked}
                  />
                ))
              : null}
          </div>
        )}
      </div>
    );
  }
}

Home.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      abstract: PropTypes.string,
      title: PropTypes.string,
      byline: PropTypes.string,
      source: PropTypes.string,
      published_date: PropTypes.string,
      url: PropTypes.string,
      media: PropTypes.arrayOf(
        PropTypes.shape({
          "media-metadata": PropTypes.arrayOf(
            PropTypes.shape({
              url: PropTypes.string,
            })
          ),
        })
      ),
    })
  ),
  loading: PropTypes.bool,
  getArticles: PropTypes.func,
};

const mapStateToProps = ({ articles }) => {
  return {
    articles: articles.articles,
    loading: articles.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getArticles: (period) => dispatch(getArticles(period)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
