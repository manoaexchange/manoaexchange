import React from 'react';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Card, Container, Image } from 'semantic-ui-react';
import piniolkimg from 'piniolkimg.png';

class MessageHead extends React.Component {
  render() {
    return (
        <div>
          <h1>Messages</h1>
          <h2>Katherine Piniol</h2>
          <Image src={piniolkimg} size='tiny'/>
        </div>
    )
  }
}

class MessageFeed extends React.Component {
  render() {
    return (
        <Container>
          <div>
            <Card.Group>
              <Card>
                <Card.Content>
                  <Card.Header>Matthew Harris</Card.Header>
                  <Card.Meta>Co-Worker</Card.Meta>
                  <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Card.Header>You</Card.Header>
                  <Card.Meta>Co-Worker</Card.Meta>
                  <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
                </Card.Content>
              </Card>
            </Card.Group>
          </div>
        </Container>
    )
  }
}

class Messagepage extends React.Component {

  render() {
    return (
        <div>
          <MessageHead/>
          <MessageFeed/>
        </div>
    );
  }
}

export default Messagepage
