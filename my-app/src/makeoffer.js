import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './style.css';

import { Container, Dropdown } from 'semantic-ui-react';

const itemOptions = [
  { key: 'ho', value: 'ho', text: 'Household items' },
  { key: 'sc', value: 'sc', text: 'School Supplies' },
  { key: 'fu', value: 'fu', text: 'Furniture' },
  { key: 'te', value: 'te', text: 'Textbooks' },
  { key: 'mi', value: 'mi', text: 'Miscellaneous' },
];

class MiddleMenu extends React.Component {
  render() {
    return (

          <Container className="ui centered grid container">
            <Dropdown
                placeholder='Select Category of item'
                fluid
                search
                selection
                options={itemOptions}
            />
          </Container>
    )
  }
}


class MakeOffer extends React.Component {

  render() {
    return (
        <div>
          <MiddleMenu/>
        </div>
    );
  }
}
export default MakeOffer;