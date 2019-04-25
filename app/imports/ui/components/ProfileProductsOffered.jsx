import React from 'react';
import { Card } from 'semantic-ui-react';
import Product from '/imports/ui/components/Product';
import PropTypes from 'prop-types';
import ProfileDescription from './ProfileDescription';

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

/** Require a document to be passed to this component. */
ProfileDescription.propTypes = {
  profiles: PropTypes.object.isRequired,
  notes: PropTypes.array.isRequired,
};
