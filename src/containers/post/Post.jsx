import React from 'react';
import AllPost from '../allPost/AllPost';
import { PostBank } from '../postBank/PostBank';
import './post.css';



function Post() {
  let path = window.location.pathname.split('/');
  var postID = path.pop() || path.pop();
  
  return (
    
    <div className='app__post'>
      {PostBank.map(post =>{
        if(post.postId == postID) {
            return <div><h1>{post.title}</h1>
            <p>{post.content}</p></div>
        }   
      })} 
      
    </div>
  )
}

export default Post