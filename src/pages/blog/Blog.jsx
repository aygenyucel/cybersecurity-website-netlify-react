import React, {useState} from 'react';
import './blog.css';
import { Link } from 'react-router-dom';
import { PostBank } from '../../helpers/PostBank';

function Blog() {
   return(
    <div className='app__blog section__padding gradient__bg'>
        <div className='app__blog-left'>
            <div className='app__blog-header'>
                <h1 className='gradient__text'>BLOG</h1>
            </div>
            <div className='app__blog-posts'>
                {PostBank.map(post =>{
                    return(
                        <div className='app__blog-post'>
                            <img src={`${post.imgUrl}`} />             
                            <h1 className='gradient__text'>{post.title}</h1>
                            <p>{post.shortContent}</p>
                            <Link to={`/blog/${post.postId}`} >
                                <button>Read More</button>
                            </Link> 
                        </div>    
                    )
                })} 
            </div>   
        </div>
        <div className='app__blog-right'>
            {/* right column */}
        </div>     
    </div>
   )
   
}

export default Blog
