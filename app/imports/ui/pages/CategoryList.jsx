import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card, Image, Button } from 'semantic-ui-react';
import { Stuffs } from '/imports/api/stuff/stuff';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class CategoryList extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">CategoryNameHere</Header>
          <div className='CategoriesPagesBox listSearchBox fauxBoxShadow'>
            <Card.Group centered>
              <Card>
                <Card.Content>
                  <Card.Header>Desk Lamp</Card.Header>
                  <Image size='small'
                         src='https://www.publicdomainpictures.net/pictures/200000/nahled/desk-lamp-1475958733bLG.jpg'/>
                </Card.Content>
                <Card.Content extra>
                  <Button basic color='black'>
                    See Product
                  </Button>
                </Card.Content>
              </Card>
            </Card.Group>
          </div>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
CategoryList.propTypes = {
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
})(CategoryList);
