import React, {useState} from 'react';
import './allPost.css';
import {PostBank} from '../postBank/PostBank';
import { Link } from 'react-router-dom';


function AllPost() {
   return(

    <div className='app__allPost section__padding gradient__bg'>

        <div className='app__allPost-left'>
            <div className='app__allPost-header'>
                <h1 className='gradient__text'>BLOG</h1>
            </div>
            <div className='app__allPost-posts'>
                {PostBank.map(post =>{
                    return(
                        <div className='app__allPost-post'>
                            
                            <img src={`${post.imgUrl}`} />
                            
                            <h1 className='gradient__text'>{post.title}</h1>
                            <p>{post.shortContent}</p>
                            <Link to={`/allPost/${post.postId}`} >
                                <button>Read More</button>
                            </Link>


                            
                            
                        </div>
                        
                        
                    )
                })} 
            </div>
    
        </div>

        <div className='app__allPost-right'>
        </div>
        

    </div>
   )
   
}

export default AllPost

{/* <>
       <h1>All Post</h1>
       {PostBank.map(post =>{
           return(
            <div className='app__allPost'>
                <h1>{post.title}</h1>
                {post.postId}
                <p>{post.shortContent}</p>
                <Link to={`/allPost/${post.postId}`} >
                    <button>Read More</button>
                </Link>
                
            </div>
           )
       })} 
       </> */}