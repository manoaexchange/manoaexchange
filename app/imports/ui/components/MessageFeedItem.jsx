import React from 'react';
import { Card, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class MessageFeedItem extends React.Component {
  render() {
    return (
        <Card.Group centered>
          <Segment inverted color='teal'>
            <Card.Content>
              <Card.Header>{this.props.messages.name}</Card.Header>
              <Card.Meta>{this.props.messages.messageTime}</Card.Meta>
              <Card.Description>{this.props.messages.messageBody}</Card.Description>
            </Card.Content>
          </Segment>
        </Card.Group>
    );
  }
}

/** Require a document to be passed to this component. */
MessageFeedItem.propTypes = {
  messages: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(MessageFeedItem);
