import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class Product extends React.Component {
  render() {
    return (
        <Card centered>
            <Card.Content>
              <Card.Header>Desk Lamp</Card.Header>
              <Image size='small'
                     src='https://www.publicdomainpictures.net/pictures/200000/nahled/desk-lamp-1475958733bLG.jpg'/>
            </Card.Content>
            <Card.Content extra>
              <Button basic color='black'>
                See Product
              </Button>
            </Card.Content>
        </Card>
    );
  }
}

export default withRouter(Product);
