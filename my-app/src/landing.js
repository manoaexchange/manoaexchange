import React from 'react';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Menu, Container, Icon, Input, Grid } from 'semantic-ui-react';

class NavMenu extends React.Component {

  render() {
    return (
        <div>
          <Menu className='fixed menu navMenu' inverted>
            <Container>
              <Menu.Item><Icon name='home'/></Menu.Item>
              <Menu.Item>Categories</Menu.Item>
              <Menu.Item>
                <Input icon='search' placeholder='Search'/>
              </Menu.Item>
              <Menu.Item position='right'>Sign In</Menu.Item>
            </Container>
          </Menu>
        </div>
    )
  }
}

class BannerImage extends React.Component {
  render() {
    const gridStyle = { height: "600px" };
    return (
        <div className='landing banner image'>
          <Grid container verticalAlign='middle' columns={3} centered style={gridStyle}>
            <Grid.Row>
              <Grid.Column>
                <div className='text bannerText'>
                  Manoa Exchange is a Meteor Application that allows the UH Manoa community to
                  sell their unwanted dormitory and/or apartment appliances. This makes it easy for students, faculty,
                  and staff alike to post and find potential products, along with setting up a meeting on campus to
                  exchange goods.
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className='text bannerText'>
                  Sign in to contact sellers or post products of your own!
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    )
  }
}

class Landing extends React.Component {

  render() {
    return (
        <div>
          <Container textAlign='left'>
            <h1>Manoa Exchange</h1>
          </Container>
          <NavMenu/>
          <BannerImage/>
        </div>
    );
  }
}

export default Landing
