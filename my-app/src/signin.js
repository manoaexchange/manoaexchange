import React from 'react';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Form, Grid, Header, Message, Segment, Button } from 'semantic-ui-react';

class Signin extends React.Component {

  render() {
    return (
        <Container>
          <Grid textAlign="center" verticalAlign="middle" centered columns={2}>
            <Grid.Column>
              <Header as="h2" textAlign="center">
                Register your account
              </Header>
              <Form onSubmit={this.handleSubmit}>
                <Segment stacked>
                  <Form.Input
                      label="Email"
                      icon="user"
                      iconPosition="left"
                      name="email"
                      type="email"
                      placeholder="E-mail address"
                      onChange={this.handleChange}
                  />
                  <Form.Input
                      label="Password"
                      icon="lock"
                      iconPosition="left"
                      name="password"
                      placeholder="Password"
                      type="password"
                      onChange={this.handleChange}
                  />
                  <Form.Button content="Submit"/>
                </Segment>
              </Form>
              <Message>
                Don't have an account?
                <br/>
                <Button>Create an account</Button>
              </Message>
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}

export default Signin