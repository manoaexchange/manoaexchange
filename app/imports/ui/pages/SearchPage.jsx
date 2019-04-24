import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card, Dropdown, Menu, Input, Divider, Button } from 'semantic-ui-react';
import { Stuffs } from '/imports/api/stuff/stuff';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Product from '/imports/ui/components/Product';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class SearchPage extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */

  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const conditions = [
      { key: 'all', text: 'all', value: 'all' },
      { key: 'excellent', text: 'excellent', value: 'excellent' },
      { key: 'good', text: 'good', value: 'good' },
      { key: 'fair', text: 'fair', value: 'fair' },
      { key: 'poor', text: 'poor', value: 'poor' },
    ];
    return (
        <Container>
          <Header as="h2" textAlign="center">Search Results</Header>
          <Menu>
            <Menu.Item>
              <Input
                  style={{ width: '650px' }} icon='search' placeholder='Search'
                  label={<Dropdown defaultValue='all' options={conditions}/>}
                  labelPosition='left'/>
            </Menu.Item>
            <Menu.Item><Button>Clear</Button></Menu.Item>
            <Dropdown item text='Sort By...'>
              <Dropdown.Menu>
                <Dropdown.Item>Newest First</Dropdown.Item>
                <Dropdown.Item>Oldest First</Dropdown.Item>
                <Dropdown.Item>A-Z</Dropdown.Item>
                <Dropdown.Item>Z-A</Dropdown.Item>
                <Dropdown.Item>Owner Ascending</Dropdown.Item>
                <Dropdown.Item>Owner Descending</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
          <Divider hidden/>
          <div className='CategoriesPagesBox listSearchBox fauxBoxShadow'>
            <Card.Group centered>
              <Product/>
              <Product/>
            </Card.Group>
          </div>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
SearchPage.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Stuff');
  return {
    stuffs: Stuffs.find({}).fetch(),
    ready: subscription.ready(),
  };
})(SearchPage);
