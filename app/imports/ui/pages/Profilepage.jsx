import React from 'react';
import { Grid, Segment, Container, Divider, Loader, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import ProfileProductsOffered from '../components/ProfileProductsOffered';
import ProfileDescription from '../components/ProfileDescription';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Profiles } from '/imports/api/profile/profile';

class Profilepage extends React.Component {
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    return (
        <div className='generalPageMargin'>
          <Grid centered columns={3}>
            <Segment className='profile desc box'>
              <Container>
                <div>
                  <h1>Profile Page</h1>
                  {this.props.profiles.map((profile, index) => <ProfileDescription key={index} profiles={profile} />)}
                  <Button floated='right' as={NavLink} activeClassName=""
                          exact to={`/editprofile/${this.props.profiles._id}`}>
                    Edit Profile
                  </Button>
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

/** Require an array of Profiles documents in the props. */
Profilepage.propTypes = {
  profiles: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Profiles documents.
  const subscription = Meteor.subscribe('Profiles');
  return {
    profiles: Profiles.find({}).fetch(),
    ready: subscription.ready(),
  };
})(Profilepage);
