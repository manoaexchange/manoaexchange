import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { Messages } from '/imports/api/stuff/messages';
import MessageItem from '/imports/ui/components/MessageItem';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Profiles } from '/imports/api/profile/profile';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class MessageList extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
  //  let users = (this.props.messages.filter({}, { fields: { owner: 1 } }) + this.props.messages.filter({}, { fields: { name: 0 } }));
    return (
        <div className='generalPageMargin'>
          <Container>
            <Header as="h2" textAlign="center">Messages</Header>
            <div className='CategoriesPagesBox listSearchBox fauxBoxShadow'>
              <Card.Group centered>
                {this.props.messages.map((message) => <MessageItem key={message._id} messages={message}/>)}
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
  profiles: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to messages documents.
  const subscription = Meteor.subscribe('Messages');
  const subscription2 = Meteor.subscribe('Profiles');
  return {
    messages: Messages.find({}).fetch(),
    profiles: Profiles.find({}).fetch(),
    ready: (subscription.ready() && subscription2),
  };
})(MessageList);
