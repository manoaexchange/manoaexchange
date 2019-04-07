import React from 'react';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Menu, Container, Icon, Input, Grid, Divider } from 'semantic-ui-react';

class UserNavMenu extends React.Component {

  render() {
    return (
        <div>
          <Menu className='fixed menu userNavMenu'>
            <Container>
              <Menu.Item><Icon name='home'/></Menu.Item>
              <Menu.Item>Categories</Menu.Item>
              <Menu.Item>
                <Input icon='search' placeholder='Search'/>
              </Menu.Item>
              <Menu.Item position='right'>Profile</Menu.Item>
              <Menu.Item>Messages</Menu.Item>
              <Menu.Item>Sign Out</Menu.Item>
            </Container>
          </Menu>
        </div>
    )
  }
}

class UserBannerImage extends React.Component {
  render() {
    const gridStyle = { height: '335px' };
    return (
        <div>
          <div className='userLandingBanner'>
            <Grid verticalAlign='middle' centered style={gridStyle} columns={2}>
              <Grid.Column>
                <div className='text userBannerText'>MANOA EXCHANGE</div>
              </Grid.Column>
            </Grid>
          </div>
          <h1 className="centered ui header gettingStarted">Lets Get Started!</h1>
          <div className='landing description'>
            <Grid container columns={3} centered relaxed>
              <Grid.Row>
                <Grid.Column>
                  <Divider horizontal>
                    <Icon name='question circle' size='big'/>
                  </Divider>
                  <div className='text landingCategories'>
                    Placeholder categories?
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <Divider horizontal>
                    <Icon name='question circle' size='big'/>
                  </Divider>
                  <div className='text LandingListItem'>
                    Placeholder List items?
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>
    )
  }
}

class UserHome extends React.Component {

  render() {
    return (
        <div>
          <UserNavMenu/>
          <UserBannerImage/>
        </div>
    );
  }
}

export default UserHome