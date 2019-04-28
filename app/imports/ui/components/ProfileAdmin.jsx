import React from 'react';
import { Table, Image, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Bert } from 'meteor/themeteorchef:bert';
import { Profiles } from '/imports/api/stuff/items';


/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class ProfileAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  deleteCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Delete failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Delete succeeded' });
    }
  }

  onClick() {
    /* eslint-disable-next-line */
    const result = confirm('Delete this item?');
    if (result) {
      Profiles.remove(this.props.profiles._id, this.deleteCallback);
    }
  }

  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.profiles.name}</Table.Cell>
          <Table.Cell>{this.props.profiles.owner}</Table.Cell>
          <Table.Cell><Image src ={this.props.profiles.imageurl} size = 'tiny'/> </Table.Cell>
          <Table.Cell>
            <Button basic onClick={this.onClick}>Delete</Button>
          </Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
ProfileAdmin.propTypes = {
  profiles: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(ProfileAdmin);
