import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';
import { PostBank } from '../postBank/PostBank';
import { Link } from 'react-router-dom';

const Blog = () => (
  <div className="app__blog section__padding gradient__bg" >
    <div className="app__blog-heading">
      <h1 className="gradient__text">Take a Look Through Our Articles</h1>
    </div>
    <div className="app__blog-container">
      <div className="app__blog-container_groupA">
        <Article imgUrl={PostBank[0].imgUrl} date={PostBank[0].date} text={PostBank[0].title} />
      </div>
      <div className="app__blog-container_groupB">
        <Article imgUrl={PostBank[1].imgUrl} date={PostBank[1].date} text={PostBank[1].title} />
        <Article imgUrl={PostBank[2].imgUrl} date={PostBank[2].date} text={PostBank[2].title} />
        <Article imgUrl={PostBank[3].imgUrl} date={PostBank[3].date} text={PostBank[3].title} />
        <Article imgUrl={PostBank[4].imgUrl} date={PostBank[4].date} text={PostBank[4].title} />
      </div>
    </div>
    <Link to={'/blog'}>
      <button>READ MORE</button>
    </Link>
    
  </div>
);

export default Blog;