import React from 'react';
import { Grid, Segment, Container, Divider } from 'semantic-ui-react';
import ProfileProductsOffered from '../components/ProfileProductsOffered';
import ProfileDescription from '../components/ProfileDescription';

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

export default Profilepage;
