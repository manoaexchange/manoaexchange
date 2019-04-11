import React from 'react';
import { Image, Button } from 'semantic-ui-react';

export default class ProfileDescription extends React.Component {
  render() {
    return (
        <div>
          <h2>Katherine Piniol</h2>
          <Image src={'/images/piniolkimg.png'} size='medium' inline/>
          <p>
            <Button basic color='red' centered>
              Report
            </Button>
            <p>Email: sample@sample.com</p>
            <p>Phone: (808)123-4567</p>
          </p>
          <Button floated='right'>Edit Profile</Button>
        </div>
    );
  }
}
