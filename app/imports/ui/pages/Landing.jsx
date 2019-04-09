import React from 'react';
export NavMenu from '../components/NavMenu';
export BannerImage from '../components/BannerImage';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {

  render() {
    return (
        <div>
          <NavMenu />
          <BannerImage />
        </div>
    );
  }
}

export default Landing;
