import React from 'react';
import Article from '../../../components/article/Article';
import './blog.css';
import { Link } from 'react-router-dom';
import { PostBank } from '../../../helpers/PostBank';

const Blog = () => (

  <div className="app__blog section__margin" >
    <div className="app__blog-heading">
      <h1 className="gradient__text">Take a Look Through Our Articles</h1>
    </div>
    <div className="app__blog-container">
      <div className="app__blog-container_groupA">
        <Article imgUrl={PostBank[0].imgUrl} date={PostBank[0].date} title={PostBank[0].title} shortContent={PostBank[0].content} />
      </div>
      <div className="app__blog-container_groupB">
        <Article imgUrl={PostBank[1].imgUrl} date={PostBank[1].date} title={PostBank[1].title} shortContent={PostBank[1].shortContent} />
        <Article imgUrl={PostBank[2].imgUrl} date={PostBank[2].date} title={PostBank[2].title} shortContent={PostBank[2].shortContent} />
        <Article imgUrl={PostBank[3].imgUrl} date={PostBank[3].date} title={PostBank[3].title} shortContent={PostBank[3].shortContent} />
        <Article imgUrl={PostBank[4].imgUrl} date={PostBank[4].date} title={PostBank[4].title} shortContent={PostBank[4].shortContent} />
      </div>
    </div>
    <Link to={'/blog'}>
      <button>READ MORE</button>
    </Link>
    
  </div>
);

export default Blog;