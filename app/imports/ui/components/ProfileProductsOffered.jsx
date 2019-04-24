import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

export default class ProfileProductsOffered extends React.Component {
  render() {
    return (
        <div>
          <h2>Products On Sale</h2>
          <Card.Group>
            <Card centered href=''>
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
          </Card.Group>
        </div>
    );
  }
}
