import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, /** Card, Dropdown, Grid, Image, Button, */ Table } from 'semantic-ui-react';
import { Items } from '/imports/api/stuff/items';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import _ from 'lodash';
import CategoryListItem from '/imports/ui/components/CategoryListItem';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.handleSort = this.handleSort.bind(this);
  }

  docId = this.props.docId;

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  allItems = Items.find({ category: this.docId }).fetch();

  state = {
    column: null,
    data: this.allItems,
    direction: null,
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      });

      return;
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    });
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    const { column, data, direction } = this.state;
    return (
        <div className='generalPageMargin'>
          <Container>
            <Header as='h2' textAlign='center'>{this.props.docId}</Header>
            <div className='CategoriesPagesBox listSearchBox fauxBoxShadow'>
              <Table sortable basic='very' celled fixed>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell
                        sorted={column === 'item' ? direction : null}
                        onClick={this.handleSort('item')}
                    >
                      Name
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                      Image
                    </Table.HeaderCell>
                    <Table.HeaderCell
                        sorted={column === 'condition' ? direction : null}
                        onClick={this.handleSort('condition')}
                    >
                      Condition
                    </Table.HeaderCell>
                    <Table.HeaderCell
                        sorted={column === 'quantity' ? direction : null}
                        onClick={this.handleSort('quantity')}
                    >
                      Quantity
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                      Description
                    </Table.HeaderCell>
                    <Table.HeaderCell
                        sorted={column === 'owner' ? direction : null}
                        onClick={this.handleSort('owner')}
                    >
                      Owner
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                      Links
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {data.map((item, index) => (
                      <CategoryListItem key={index} items={item} index={index}/>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </Container>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
CategoryList.propTypes = {
  docId: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Items documents.
  const subscription = Meteor.subscribe('Items');
  return {
    docId: documentId,
    items: Items.find({ category: 'Storage' }),
    ready: subscription.ready(),
  };
})(CategoryList);
