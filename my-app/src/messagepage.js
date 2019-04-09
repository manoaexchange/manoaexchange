import React from 'react';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Card, Container, Image, Grid, Divider, Segment, Form, Button } from 'semantic-ui-react';
import piniolkimg from './piniolkimg.png';

class MessageHead extends React.Component {
  render() {
    const msgTitleMargin = { margin: "10px" };
    return (
        <div>
          <Grid centered style={msgTitleMargin}>
            <h2>Messages from Katherine Piniol</h2>
          </Grid>
          <Image src={piniolkimg} size='tiny' centered/>
          <Divider />
        </div>
    )
  }
}

class MessageFeed extends React.Component {
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
                      <Card.Description>It's works just fine. Shall we meet at Campus Center on Friday at
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
    )
  }
}

class Messagepage extends React.Component {

  render() {
    return (
        <div>
          <Container>
            <Grid centered columns={3}>
              <Grid.Row centered>
                <Grid.Column>
                  <div className='messagebgpage'>
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

export default Messagepage
