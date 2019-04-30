import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card, Dropdown, Grid } from 'semantic-ui-react';
import { Items } from '/imports/api/stuff/items';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Product from '/imports/ui/components/Product';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class CategoryList extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const options = [
      {
        key: 'Least Items First',
        text: 'Least Items First',
        value: 'Least Items First',
        content: 'Least Items First',
      },
      {
        key: 'this week',
        text: 'this week',
        value: 'this week',
        content: 'This Week',
      },
      {
        key: 'this month',
        text: 'this month',
        value: 'this month',
        content: 'This Month',
      },
    ];
    const sortState = { item: -1 };
    const allItems = Items.find({}, { sort: sortState });
    return (
        <div className='generalPageMargin'>
          <Container>
            <Header as="h2" textAlign="center">CategoryNameHere</Header>
            <div className='CategoriesPagesBox listSearchBox fauxBoxShadow'>
              <Grid>
                <Grid.Column floated='right' width={2}>
                  <Dropdown
                      header='Sort By...'
                      options={options}
                      defaultValue={options[0].value}
                  />
                  <Dropdown text='Sort By...'>
                    <Dropdown.Menu>
                      <Dropdown.Item>Least Items First</Dropdown.Item>
                      <Dropdown.Item>Most Items First</Dropdown.Item>
                      <Dropdown.Item>A-Z</Dropdown.Item>
                      <Dropdown.Item>Z-A</Dropdown.Item>
                      <Dropdown.Item>Owner Ascending</Dropdown.Item>
                      <Dropdown.Item>Owner Descending</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Grid.Column>
              </Grid>
              <Card.Group centered>
                {allItems.map((item) => <Product key={item._id} items={item}/>)}
              </Card.Group>
            </div>
          </Container>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
CategoryList.propTypes = {
  items: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Items documents.
  const subscription = Meteor.subscribe('Items');
  return {
    items: Items.find({}).fetch(),
    ready: subscription.ready(),
  };
})(CategoryList);
