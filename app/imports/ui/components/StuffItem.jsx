import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class StuffItem extends React.Component {
  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.item.item}</Table.Cell>
          <Table.Cell>{this.props.item.quantity}</Table.Cell>
          <Table.Cell>{this.props.item.description}</Table.Cell>
          <Table.Cell>{this.props.item.image}</Table.Cell>
          <Table.Cell>{this.props.item.condition}</Table.Cell>
          <Table.Cell>
            <Link to={`/edit/${this.props.item._id}`}>Edit</Link>
          </Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
StuffItem.propTypes = {
  item: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(StuffItem);
