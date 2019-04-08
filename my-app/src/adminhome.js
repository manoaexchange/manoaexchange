import React from 'react';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Menu, Container, Icon, Input, Grid, Divider } from 'semantic-ui-react';

class AdminNavMenu extends React.Component {

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
              <Menu.Item>Admin Console</Menu.Item>
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
          <h1 className="centered ui header gettingStarted">Quick Start Options</h1>
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
              <Divider horizontal>
                <Icon name='search' size='massive'/>
              </Divider>
              <Grid.Row>
              <div>
                <Input style={{width:"500px"}} size='massive' icon='search' placeholder='Search'/>
              </div>
              </Grid.Row>
            </Grid>
          </div>
        </div>
    )
  }
}

class Adminhome extends React.Component {
  render() {
    return (
        <div>
          <AdminNavMenu/>
          <UserBannerImage/>
        </div>
    );
  }
}
export default Adminhome