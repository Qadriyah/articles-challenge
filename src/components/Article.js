import React from "react";
import moment from "moment";
import PropTypes from "prop-types";

const Article = ({
  media,
  abstract,
  title,
  byline,
  source,
  published_date,
  url,
  onArticleClicked,
}) => {
  const imgUrl =
    media && media.length > 0 ? media[0]["media-metadata"][1].url : null;

  return (
    <div
      className="article"
      onClick={() => onArticleClicked({ url })}
      data-test="article"
    >
      <div
        style={{
          flex: 1,
          height: "250px",
          backgroundImage: `url(${imgUrl ? imgUrl : "media/gallery.svg"})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: `${imgUrl ? "cover" : "100px"}`,
        }}
      />
      <div className="title" data-test="title">
        {title}
      </div>
      <div className="abstract">{abstract}</div>
      <div className="author">{byline}</div>
      <div className="source">
        {`${source} - ${moment(published_date).format("MMM DD, YYYY")}`}
      </div>
    </div>
  );
};

Article.propTypes = {
  media: PropTypes.arrayOf(
    PropTypes.shape({
      "media-metadata": PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string,
        })
      ),
    })
  ),
  abstract: PropTypes.string,
  title: PropTypes.string,
  byline: PropTypes.string,
  source: PropTypes.string,
  published_date: PropTypes.string,
  url: PropTypes.string,
  onArticleClicked: PropTypes.func.isRequired,
};

export default Article;
