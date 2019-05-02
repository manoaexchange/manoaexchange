import React from 'react';
import { Card, Grid, Form, Segment, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Messages } from '/imports/api/stuff/messages';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class MessageFeed extends React.Component {
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

MessageFeed.propTypes = {
  messages: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withRouter(MessageFeed);