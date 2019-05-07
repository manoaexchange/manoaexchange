import React from 'react';
import { Grid, Segment, Container, Divider, Loader } from 'semantic-ui-react';
import ProfileProductsOffered from '../components/ProfileProductsOffered';
import ProfileDescription from '../components/ProfileDescription';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Profiles } from '/imports/api/profile/profile';
import { Items } from '/imports/api/stuff/items';

class Profilepage extends React.Component {
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    const topMargin = { marginTop: '25px' };
    return (
        <div className='generalPageMargin' style={ topMargin }>
          <Grid centered columns={3}>
            <Segment className='profile desc box'>
              <Container>
                <div>
                  <h1>Profile Page</h1>
                  {this.props.profiles.map((profile, index) => <div key={index}>
                        <ProfileDescription key={index} profiles={profile}/>
                        <Divider inverted/>
                        <ProfileProductsOffered key={index} items={this.props.items} profiles={profile}/>
                      </div>)}
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
  items: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Profiles documents.
  const subscription = Meteor.subscribe('Profiles');
  const subscription2 = Meteor.subscribe('Items');
  return {
    profiles: Profiles.find({}).fetch(),
    items: Items.find({}).fetch(),
    ready: (subscription.ready() && subscription2.ready()),
  };
})(Profilepage);
