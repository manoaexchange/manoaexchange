import React from 'react'
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Segment, Grid, Image, Divider, Card, Button } from 'semantic-ui-react';
import piniolkimg from './piniolkimg.png';

class ProfileDescription extends React.Component {
  render() {
    return (
        <div>
          <h2>Katherine Piniol</h2>
          <Image src={piniolkimg} size='medium' inline/>
          <p>
            <p>Email: sample@sample.com</p>
            <p>Phone: (808)123-4567</p>
          </p>
        </div>
    )
  }
}

class ProfileProductsOffered extends React.Component {
  render() {
    return (
        <div>
          <Card.group>
            <Card>
              <Card.Content>
                <Image size='small' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
                <Card.Header>Steve Sanders</Card.Header>
                <Card.Meta>Friends of Elliot</Card.Meta>
                <Card.Description>
                  Steve wants to add you to the group <strong>best friends</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green'>
                    Approve
                  </Button>
                  <Button basic color='red'>
                    Decline
                  </Button>
                </div>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Image size='small' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
                <Card.Header>Steve Sanders</Card.Header>
                <Card.Meta>Friends of Elliot</Card.Meta>
                <Card.Description>
                  Steve wants to add you to the group <strong>best friends</strong>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green'>
                    Approve
                  </Button>
                  <Button basic color='red'>
                    Decline
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Card.group>
        </div>
    )
  }
}

class Profilepage extends React.Component {
  render() {
    return (
        <div>
          <Grid centered columns={3}>
            <Segment inverted color='grey'>
              <Container>
                <div className='profile desc box'>
                  <h1>Profile Page</h1>
                  <ProfileDescription/>
                  <Divider inverted/>
                  <ProfileProductsOffered/>
                </div>
              </Container>
            </Segment>
          </Grid>
        </div>
    );
  }
}

export default Profilepage
