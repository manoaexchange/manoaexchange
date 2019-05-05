import React from 'react';
import { Table, Image, Grid, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, NavLink } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class CategoryListItem extends React.Component {
  render() {
    return (
        <Table.Row key={this.props.index}>
          <Table.Cell>{this.props.items.item}</Table.Cell>
          <Table.Cell><Image size='small' src={this.props.items.image}/></Table.Cell>
          <Table.Cell>{this.props.items.condition}</Table.Cell>
          <Table.Cell>{this.props.items.quantity}</Table.Cell>
          <Table.Cell>{this.props.items.description}</Table.Cell>
          <Table.Cell>{this.props.items.owner}</Table.Cell>
          <Table.Cell><Grid centered>
            <Button color='red' as={NavLink} activeClassName=""
                    exact to={`/notify/${this.props.items._id}`}>
              Report
            </Button>
          </Grid>
          </Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
CategoryListItem.propTypes = {
  items: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(CategoryListItem);
