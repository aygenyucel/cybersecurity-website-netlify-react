import React from 'react';
import { PostBank } from '../../helpers/PostBank';
import './post.css';

function Post() {
  let path = window.location.pathname.split('/');
  var postID = path.pop() || path.pop();

  return (
    <div className='app__post  section__margin'>
      {PostBank.map( post => {
        if(post.postId == postID) {
            return  <div className='app__post-div'>
                      <div className='app__post-image'>
                        <img src={`${post.imgUrl}`}></img>
                      </div>
                      <div className='app__post-text'>
                        <h1>{post.title}</h1>
                        <p>{post.content}</p>
                      </div>
                    </div>
        }})
      }      
    </div>
  )
}

export default Post