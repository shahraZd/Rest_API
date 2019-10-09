import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Edit from './Edit'

const Cards = (props) => {
  return (
    <div>
      <Card style={{width:"300px",height:"400px",margin:"10px"}} >
         <CardImg top style={{width:"200px"}} src="https://image.flaticon.com/icons/svg/21/21104.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.contact.name}</CardTitle>
          <CardSubtitle>{props.contact.phone}</CardSubtitle>
          <CardText>{props.contact.email}</CardText>
          <Edit id={props.contact._id}/>
       
          <Button onClick={props.delete}>Delete</Button>
        </CardBody>
      </Card> 
    </div>
  );
};

export default Cards;