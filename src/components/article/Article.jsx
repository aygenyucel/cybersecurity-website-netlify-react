import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, title, shortContent }) => (
  <div className="app__blog-container_article">
    <div className="app__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="app__blog-container_article-content">
      <div className='app__blog-container_article-content_date'>
        <p>{date}</p>
      </div>
      <div className='app__blog-container_article-content_title'>
        <h3>{title}</h3>
      </div>
      <div className='app__blog-container_article-content_content'>
        <p>{shortContent}</p>
      </div>
      
    </div>
  </div>
);

export default Article;