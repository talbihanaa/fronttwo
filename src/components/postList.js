import React, { useEffect, useState } from 'react'
import { fetchComments } from '../Api/commentApi'
import PostBox from './PostBox';

import AskPage from "../views/AskPage";

const PostList = () => {
  
  const [comment , setComment] = useState([])
  console.log(comment);
  const getComments = async()=>{
    await fetchComments()
    .then((doc)=>{
      
      setComment(doc.comments)
    })
    .catch((err)=>{
      console.log(err);
    })
  }


  useEffect(()=>{
getComments()
  },[])
  return (
    <div>
      <AskPage />
      {comment.map((item,index)=>{
        return <PostBox key={index} post ={item}/>
      })}
       
    </div>
  )
}

export default PostList