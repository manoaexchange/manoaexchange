import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Items } from '/imports/api/stuff/items';

class Product extends React.Component {

  render() {
    return (
        <Card >
          <Card.Content align='center'>
            <Card.Header>Desk Lamp</Card.Header>
            <Card.Meta>February 23, 2019</Card.Meta>
            <Image size='small'
                   src='https://www.publicdomainpictures.net/pictures/200000/nahled/desk-lamp-1475958733bLG.jpg'/>
          </Card.Content>
          <Card.Content extra align='center'>
            <Button basic color='black'>
              See Product
            </Button>
          </Card.Content>
        </Card>
    );
  }
}


/** Require a document to be passed to this component. */
Product.propTypes = {
  items: PropTypes.object.isRequired,
};

export default withRouter(Product);
