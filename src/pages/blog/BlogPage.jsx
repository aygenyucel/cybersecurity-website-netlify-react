import React, {useState} from 'react';
import './blogPage.css';
import { Link } from 'react-router-dom';
import { PostBank } from '../../helpers/PostBank';

function BlogPage() {
   return(
    <div className='app__blogPage section__padding gradient__bg'>
        <div className='app__blogPage-left'>
            <div className='app__blogPage-header'>
                <h1 className='gradient__text'>BLOG</h1>
            </div>
            <div className='app__blogPage-posts'>
                {PostBank.map(post =>{
                    return(
                        <div className='app__blogPage-post'>
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
        <div className='app__blogPage-right'>
            {/* right column */}
        </div>     
    </div>
   )
   
}

export default BlogPage
