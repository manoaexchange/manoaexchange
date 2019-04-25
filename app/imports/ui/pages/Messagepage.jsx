import React from 'react';
import { Container, Divider, Grid } from 'semantic-ui-react';
import MessageFeed from '/imports/ui/components/MessageFeed';
import MessageHead from '/imports/ui/components/MessageHead';
import PropTypes from 'prop-types';

/** A simple static component to render some text for the landing page. */
class Messagepage extends React.Component {

  render() {
    return (
        <div className='generalPageMargin'>
          <Container>
            <Grid centered columns={3}>
              <Grid.Row centered>
                <Grid.Column>
                  <div className='messagebgpage fauxBoxShadow'>
                    <MessageHead/>
                    <Divider hidden/>
                    <MessageFeed/>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
    );
  }
}

/** Require an array of Messages documents in the props. */
Messagepage.propTypes = {
  messages: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Messages documents.
  const subscription = Meteor.subscribe('Messages');
  return {
    messages: Messages.find({}).fetch(),
    ready: subscription.ready(),
  };
})(Messagepage);
