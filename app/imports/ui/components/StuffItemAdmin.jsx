import React from 'react';
import { Table, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class StuffItemAdmin extends React.Component {
  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.items.item}</Table.Cell>
          <Table.Cell>{this.props.items.quantity}</Table.Cell>
          <Table.Cell>{this.props.items.description}</Table.Cell>
          <Table.Cell><Image Tiny src ={this.props.items.image} size = 'tiny'/> </Table.Cell>
          <Table.Cell>{this.props.items.condition}</Table.Cell>
          <Table.Cell>{this.props.items.category}</Table.Cell>
          <Table.Cell>{this.props.items.owner}</Table.Cell>
          <Table.Cell>
            <Link to={`/edit/${this.props.items._id}`}>Edit</Link>
          </Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
StuffItemAdmin.propTypes = {
  items: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(StuffItemAdmin);
