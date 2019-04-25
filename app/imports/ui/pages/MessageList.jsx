import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card, Image, Button } from 'semantic-ui-react';
import { Messages } from '/imports/api/stuff/messages';
import MessageItem from '/imports/ui/components/MessageItem';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class MessageList extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <div className='generalPageMargin'>
          <Container>
            <Header as="h2" textAlign="center">Messages</Header>
            <div className='CategoriesPagesBox listSearchBox fauxBoxShadow'>
              <Card.Group centered>
                <Card>
                  <Card.Content>
                    <Image floated='right' size='mini' src='/images/piniolkimg.png'/>
                    <Card.Header>Katherine Piniol</Card.Header>
                    <Card.Meta>Tuesday 9:54 am</Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                    <Button basic fluid color='teal' as={NavLink} activeClassName="" exact to="/message">
                      Open
                    </Button>
                  </Card.Content>
                </Card>
                {this.props.messages.map((message) => <MessageItem key={message._id} messages={message} />)}
              </Card.Group>
            </div>
          </Container>
        </div>
    );
  }
}

/** Require an array of messages documents in the props. */
MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to messages documents.
  const subscription = Meteor.subscribe('Messages');
  return {
    messages: Messages.find({}).fetch(),
    ready: subscription.ready(),
  };
})(MessageList);
