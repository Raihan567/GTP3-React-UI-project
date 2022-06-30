import React from "react";
import "./Article.css";
const Article = ({ img, date, text }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-img">
        <img src={img} alt="blog_image" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p> Read full article</p>
      </div>
    </div>
  );
};

export default Article;
