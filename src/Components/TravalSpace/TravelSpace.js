import React from 'react';
import { Button, Card } from 'react-bootstrap';
import CoxsBazar from '../../Image/CoxsBazar.png';

export const TravelSpace = () => {
    
    return (
      <div>
        
    
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={CoxsBazar} />
  <Card.Body>
    <Card.Title>Cox's Bazar</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>          
    
    );
};

export default TravelSpace;