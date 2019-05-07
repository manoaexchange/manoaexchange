import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Items } from '/imports/api/stuff/items';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    /* eslint-disable-next-line */
    const result = confirm('Delete this item?');
    if (result) {
      Items.remove(this.props.items._id, this.deleteCallback);
    }
  }

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
            <Button color='red' as={NavLink} activeClassName="" fluid
                    exact to={`/notify/${this.props.items._id}`}>
              Report
            </Button>
            <div>
              {this.props.currentUser === this.props.items.owner ? (
                  <div className='ui two buttons'>
                    <Button color='teal' basic as={NavLink} activeClassName=""
                            exact to={`/edit/${this.props.items._id}`}>Edit</Button>
                    <Button color='red' basic onClick={this.onClick}>Delete</Button>
                  </div>
              ) : ''}
            </div>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Product.propTypes = {
  items: PropTypes.object.isRequired,
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const ProductContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(Product);

export default withRouter(ProductContainer);
