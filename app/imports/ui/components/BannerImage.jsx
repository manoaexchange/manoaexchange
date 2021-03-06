import React from 'react';
import { Grid, Icon, Divider } from 'semantic-ui-react';


/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
export default class BannerImage extends React.Component {
  render() {
    const gridStyle = { height: '400px' };
    return (
        <div>
          <div className='landing banner'>
            <Grid verticalAlign='middle' centered style={gridStyle} columns={2}>
              <Grid.Column>
                <div className='text bannerText'>MANOA EXCHANGE</div>
              </Grid.Column>
            </Grid>
          </div>
          <div className='landing description'>
            <Grid container columns={3} centered relaxed>
              <Grid.Row>
                <Grid.Column>
                  <Divider horizontal>
                    <Icon name='question circle' size='big'/>
                  </Divider>
                  <div className='text landingDescText'>
                    Manoa Exchange is a Meteor Application that allows the UH Manoa community to
                    sell their unwanted dormitory and/or apartment appliances. This makes it easy for students, faculty,
                    and staff alike to post and find potential products, along with setting up a meeting on campus to
                    exchange goods.
                  </div>
                </Grid.Column>
                <Grid.Column>
                  <Divider horizontal>
                    <Icon name='sign in' size='big'/>
                  </Divider>
                  <div className='text landingDescText'>
                    Sign in to contact sellers or post products of your own!
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>
    );
  }
}
