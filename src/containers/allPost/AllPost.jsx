import React, {useState} from 'react';
import './allPost.css';
import Post from '../post/Post';
import {PostBank} from '../postBank/PostBank';
import { Link } from 'react-router-dom';


function AllPost() {
   return(
       <>
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
       </>
   )
   
}

export default AllPost