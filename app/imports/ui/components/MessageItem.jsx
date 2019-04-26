import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, NavLink } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class MessageItem extends React.Component {
  render() {
    return (
        <Card>
          <Card.Content>
            <Image floated='right' size='mini' src='/images/piniolkimg.png'/>
            <Card.Header>{this.props.messages.name}</Card.Header>
            <Card.Meta>{this.props.messages.messageTime}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Button basic fluid color='teal' as={NavLink} activeClassName="" exact to="/message">
              Open
            </Button>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
MessageItem.propTypes = {
  messages: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(MessageItem);
