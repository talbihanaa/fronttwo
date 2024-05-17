import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Answer from './answer';
import { NewAnswer } from '../Api/commentApi';

const PostBox = ({post}) => {
  const [show, setShow] = useState(false)
  const [contenu, setContenu] = useState('');

  const addAnswer = async()=>{

    await NewAnswer({contenu:contenu , id:post._id})
    .then((doc)=>{
      console.log(doc);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div style={{border:"1px solid yellow" , margin:"2rem"}}> 
      <Card>
      <Card.Header><b>Posted by </b>{post.postedBy.username}</Card.Header>
      <Card.Body>
      <Card.Title>{post.title}</Card.Title>
        <blockquote className="blockquote mb-0">
          <p>
          {post.contenu}
          </p>
          
        </blockquote>
        <button style={{backgroundColor:"transparent" , borderColor:"transparent", color:"blue"}} onClick={()=>setShow(!show)}>reply</button>
      </Card.Body>
      {
        show && <div style={{ margin:"1rem" , display:"flex" , justifyContent:"space-around"}}>
          <Form.Control
        type="text" 
        onChange={(e)=>setContenu(e.target.value)}
        style={{ width:"80%"}}
         />        
          <Button variant="secondary" onClick={()=>addAnswer()}>Poster</Button>
      </div>
      } 
      <div>
        {/* {post.answers.length > 0 && <Answer/>  } */}
        { post.answers.length > 0 && post.answers.map((item,index)=>{
          return <Answer reponse= {item} key={index}/>
        })}
        
      </div>
    </Card>    
    </div>
  )
}

export default PostBox