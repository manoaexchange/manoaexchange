import React from 'react';
import { Card } from 'semantic-ui-react';
import Product from '/imports/ui/components/Product';

export default class ProfileProductsOffered extends React.Component {
  render() {
    return (
        <div>
          <h2>Products On Sale</h2>
          <Card.Group centered>
            <Product/>
          </Card.Group>
        </div>
    );
  }
}

