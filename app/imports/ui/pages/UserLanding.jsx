import React from 'react';
import { Grid, Divider, Icon, Container, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/** A simple static component to render some text for the landing page. */
class UserLanding extends React.Component {
  render() {
    return (
        <div>
          <div className='userLandingBanner'>
            <Container>
              <Grid verticalAlign='middle' columns={1}>
                <Grid.Column>
                  <div className='text userBannerText'>MANOA EXCHANGE</div>
                </Grid.Column>
              </Grid>
            </Container>
          </div>
          <div className='landing description'>
            <h1 className="centered ui header gettingStarted">Quick Start Options</h1>
            <Grid container columns={3} centered relaxed>
              <Grid.Row>
                <Grid.Column>
                  <Divider horizontal>
                    <Icon name='folder open outline' size='big'/>
                  </Divider>
                  <div className='text landingCategories'>
                    <h1>Categories</h1>
                    <p>Not sure what you need?</p>
                    <p>Search our directories to see what is available.</p>
                    <Button basic color='olive' floated='right' as={NavLink} activeClassName=""
                            exact to='/categories'>
                      Categories
                    </Button>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <Divider horizontal>
                    <Icon name='question circle' size='big'/>
                  </Divider>
                  <div className='text landingSearch'>
                    <h1>Search</h1>
                    <p>Already know exactly what you need?</p>
                    <p>Advanced search is here to quickly narrow your search!</p>
                    <Button basic color='olive' floated='right' as={NavLink} activeClassName=""
                            exact to='/search'>
                      Search
                    </Button>
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <Divider horizontal>
                    <Icon name='dollar sign' size='big'/>
                  </Divider>
                  <div className='text LandingListItem'>
                    <h1>List Items</h1>
                    <p>Looking to sell something?</p>
                    <p>Create a new item listing here!</p>
                    <Button basic color='olive' as={NavLink} activeClassName=""
                            exact to='/add'>
                      Add Item
                    </Button>
                  </div>
                </Grid.Column>
              </Grid.Row>
              <Divider horizontal>
                <Icon name='search' size='massive'/>
              </Divider>
            </Grid>
          </div>
        </div>
    );
  }
}

export default UserLanding;
