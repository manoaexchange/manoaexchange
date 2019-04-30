import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Loader, Image, Button, Grid } from 'semantic-ui-react';
import { Items } from '/imports/api/stuff/items';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListItem extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const itemInfo = _.filter(this.props.items, function (o) { return o._id === this.props.items._id; });
    return (
        <Container>
          <div className='CategoriesPagesBox fauxBoxShadow'>
            {itemInfo.map((items) => (
                <div key={`itemInfo${items._id}`}>
                  <Grid centered columns={1}>
                    <Grid.Row>
                      <h1>{items.item}</h1>
                    </Grid.Row>
                    <Grid.Row>
                      <h2>{items.category}</h2>
                    </Grid.Row>
                  </Grid>
                  <Image src={items.image} size='medium' centered/>
                  <Grid centered columns={1}>
                    <Grid.Row>
                      <p>
                        <p>Owned by {items.owner}</p>
                        <p>Condition Quality: {items.condition}</p>
                        <p>Quantity: {items.quantity}</p>
                      </p>
                    </Grid.Row>
                    <Grid.Row>
                      <h3>Desciption: </h3>
                      <p>{items.description}</p>
                    </Grid.Row>
                    <Grid.Row>
                      <Button color='teal' as={NavLink} activeClassName=""
                              exact to="/profile">
                        Profile
                      </Button>
                      <Button color='red' as={NavLink} activeClassName=""
                              exact to={`/notify/${items._id}`}>
                        Report
                      </Button>
                    </Grid.Row>
                  </Grid>
                </div>
            ))}
          </div>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListItem.propTypes = {
  items: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
  docId: PropTypes.string.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Items');
  return {
    docId: documentId,
    items: Items.find().fetch(),
    ready: subscription.ready(),
  };
})(ListItem);
