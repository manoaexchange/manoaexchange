import React from 'react';
import BannerImage from '../components/BannerImage';
/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {

  render() {
    return (
        <div>
          <BannerImage />
        </div>
    );
  }
}

export default Landing;
