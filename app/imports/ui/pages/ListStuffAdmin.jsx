import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader, Button } from 'semantic-ui-react';
import { Items } from '/imports/api/stuff/items';
import StuffItemAdmin from '/imports/ui/components/StuffItemAdmin';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListItemAdmin extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">Items you listed for sale</Header>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Item</Table.HeaderCell>
                <Table.HeaderCell>Quantity</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
                <Table.HeaderCell>Image</Table.HeaderCell>
                <Table.HeaderCell>Condition</Table.HeaderCell>
                <Table.HeaderCell>Category</Table.HeaderCell>
                <Table.HeaderCell>Owner</Table.HeaderCell>
                <Table.HeaderCell>Admin</Table.HeaderCell>
                <Table.HeaderCell>Delete</Table.HeaderCell>

              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.items.map((item) => <StuffItemAdmin key={item._id} items={item} />)}
            </Table.Body>
          </Table>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListItemAdmin.propTypes = {
  items: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('ItemsAdmin');
  return {
    items: Items.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListItemAdmin);
