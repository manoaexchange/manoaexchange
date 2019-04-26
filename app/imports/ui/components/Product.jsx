import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class Product extends React.Component {

  render() {
    return (
        <Card >
          <Card.Content align='center'>
            <Card.Header>{this.props.items.item}</Card.Header>
            <Card.Meta>{this.props.items.category}</Card.Meta>
            <Image size='small'
                   src={this.props.items.image}/>
          </Card.Content>
          <Card.Content extra align='center'>
            <Button floated='right' as={NavLink} activeClassName="" fluid
                    exact to={`/list/${this.props.items._id}`}>
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
