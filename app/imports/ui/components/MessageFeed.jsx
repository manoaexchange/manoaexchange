import React from 'react';
import { Card, Grid, Segment, Form, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
export default class MessageFeed extends React.Component {
  render() {
    return (
        <div>
          <Card.Group>
            <Grid columns={3} centered>
              <Grid.Row>
                <Card raised>
                  <Segment inverted color='teal'>
                    <Card.Content>
                      <Card.Header>Katherine Piniol</Card.Header>
                      <Card.Meta>Monday 12:32 pm</Card.Meta>
                      <Card.Description>
                        Hello, my name is Katherine Piniol, and I was interested in the lamp you had up for sale.
                      </Card.Description>
                    </Card.Content>
                  </Segment>
                </Card>
              </Grid.Row>
              <Grid.Row>
                <Card>
                  <Segment inverted color='olive'>
                    <Card.Content>
                      <Card.Header>You</Card.Header>
                      <Card.Meta>Monday 3:54 pm</Card.Meta>
                      <Card.Description>Yes, hi! The listed price was $15.62, does that work for you?</Card.Description>
                    </Card.Content>
                  </Segment>
                </Card>
              </Grid.Row>
              <Grid.Row>
                <Card>
                  <Segment inverted color='teal'>
                    <Card.Content>
                      <Card.Header>Katherine Piniol</Card.Header>
                      <Card.Meta>Monday 7:20 pm</Card.Meta>
                      <Card.Description>It&apos;s works just fine. Shall we meet at Campus Center on Friday at
                        3?</Card.Description>
                    </Card.Content>
                  </Segment>
                </Card>
              </Grid.Row>
              <Grid.Row>
                <Card>
                  <Segment inverted color='olive'>
                    <Card.Content>
                      <Card.Header>You</Card.Header>
                      <Card.Meta>Tuesday 9:54 am</Card.Meta>
                      <Card.Description>Sounds good!</Card.Description>
                    </Card.Content>
                  </Segment>
                </Card>
              </Grid.Row>
              <Grid.Row>
                <Form reply>
                  <label>Input message:</label>
                  <Form.TextArea/>
                  <Button content='Reply' labelPosition='left'/>
                </Form>
              </Grid.Row>
            </Grid>
          </Card.Group>
        </div>
    );
  }
}

MessageFeed.propTypes = {
  messages: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};
