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
            <Button basic color='red' centered>
              Report
            </Button>
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
          <h2>Products On Sale</h2>
          <Card.Group>
            <Card centered href=''>
              <Card.Content>
                <Card.Header>Desk Lamp</Card.Header>
                <Image size='small'
                       src='https://cdn.pixabay.com/photo/2017/05/17/11/20/table-lamp-2320604_960_720.png'/>
              </Card.Content>
              <Card.Content extra>
                <Button basic color='black'>
                  See Product
                </Button>
              </Card.Content>
            </Card>
          </Card.Group>
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
