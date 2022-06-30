import React from "react";
import { Article } from "../../Components";
import "./Blog.css";
import { blog1, blog2, blog3, blog4, blog5 } from "./import.js";
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
        <div className="gpt3__blog-container">
          <div className="gpt3__blog-container_GroupA">
            <Article
              img={blog1}
              date="Sep 26, 2021"
              text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            ></Article>
          </div>
          <div className="gpt3__blog-container_GroupB">
            <Article
              img={blog2}
              date="Sep 26, 2021"
              text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            ></Article>
            <Article
              img={blog3}
              date="Sep 26, 2021"
              text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            ></Article>
            <Article
              img={blog4}
              date="Sep 26, 2021"
              text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            ></Article>
            <Article
              img={blog5}
              date="Sep 26, 2021"
              text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            ></Article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
