import React from 'react';
import Card from 'react-bootstrap/Card';

const Answer = ({reponse}) => {
  return (
    <div style={{border:"1px solid red",display:'flex' , flexDirection:"column" , alignItems:"flex-start" , width:"70%",marginLeft:"10%" }}>
    <Card style={{width:"100%"}}>
      <Card.Body>
        <Card.Title>Replied by :{reponse.answer._id}</Card.Title>
        <Card.Text>
          {reponse.answer.contenu}
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default Answer