import React from 'react';
import { Card } from 'semantic-ui-react';
import Product from '/imports/ui/components/Product';
import PropTypes from 'prop-types';
import { Items } from '/imports/api/stuff/items';

export default class ProfileProductsOffered extends React.Component {
  render() {
    const username = this.props.profiles.owner;
    const yourItems = Items.find({ owner: username });
    return (
        <div>
          <h2>Products On Sale</h2>
          <Card.Group centered>
            {yourItems.map((item, index) => <Product key={index} items={item} />)}
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
