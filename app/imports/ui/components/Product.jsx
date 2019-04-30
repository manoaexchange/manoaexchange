import React from 'react';
import { Card, Image, Button, Grid } from 'semantic-ui-react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class Product extends React.Component {

  render() {
    return (
        <Card>
          <Card.Content align='center'>
            <Card.Header>{this.props.items.item}</Card.Header>
            <Card.Meta>{this.props.items.category}</Card.Meta>
            <Image size='small'
                   src={this.props.items.image}/>
            <Card.Description>
              <p>Condition quality: {this.props.items.condition}</p>
              <p>Quantity: {this.props.items.quantity}</p>
              <p>Description: {this.props.items.description}</p>
            </Card.Description>
          </Card.Content>
          <Card.Content extra align='center'>
            <div className='ui two buttons'>
              <Button basic color='red' as={NavLink} activeClassName=""
                      exact to={`/notify/${this.props.items._id}`}>
                Report
              </Button>
              <Button basic color='teal' floated='right' as={NavLink} activeClassName=""
                      exact to='/message'>
                Message
              </Button>
            </div>
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
