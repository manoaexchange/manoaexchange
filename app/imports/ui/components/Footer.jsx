import React from 'react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '15px' };
    return (
        <div className='footer'>
          <div style={divStyle} className="ui center aligned container">
            <footer>
              <hr/>
              Manoa Exchange <br/>
              University of Hawaii<br/>
              Honolulu, HI 96822
            </footer>
          </div>
        </div>
    );
  }
}

export default Footer;
