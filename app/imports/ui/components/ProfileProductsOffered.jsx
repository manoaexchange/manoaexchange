import React from 'react';
import { Card } from 'semantic-ui-react';
import Product from '/imports/ui/components/Product';
import PropTypes from 'prop-types';

export default class ProfileProductsOffered extends React.Component {
  render() {
    return (
        <div>
          <h2>Products On Sale</h2>
          <Card.Group centered>
            {this.props.items.map((item, index) => <Product key={index} items={item} />)}
          </Card.Group>
        </div>
    );
  }
}

/** Require a document to be passed to this component. */
ProfileProductsOffered.propTypes = {
  profiles: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};
