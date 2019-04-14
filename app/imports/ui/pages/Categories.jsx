import React from 'react';
import { Grid, Container, Card } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class Categories extends React.Component {
  render() {
    return (
        <div>
          <Container>
            <Grid centered columns={3}>
              <h1 className='CategoriesPageTitle'>Categories</h1>
            </Grid>
            <div className='CategoriesPagesBox CategoriesPageTitle fauxBoxShadow'>
              <Card.Group>
                <Card centered as={NavLink} activeClassName="" exact to="/categoryList">
                  <div className='CategoryBox fauxBoxShadow'>
                    <Grid centered>
                      <h2>LAMPS</h2>
                    </Grid>
                  </div>
                </Card>
                <Card centered as={NavLink} activeClassName="" exact to="/categoryList">
                  <div className='CategoryBox fauxBoxShadow'>
                    <Grid centered>
                      <h2>PILLOWS</h2>
                    </Grid>
                  </div>
                </Card>
                <Card centered as={NavLink} activeClassName="" exact to="/categoryList">
                  <div className='CategoryBox fauxBoxShadow'>
                    <Grid centered>
                      <h2>PLATES</h2>
                    </Grid>
                  </div>
                </Card>
                <Card centered as={NavLink} activeClassName="" exact to="/categoryList">
                  <div className='CategoryBox fauxBoxShadow'>
                    <Grid centered>
                      <h2>UTENSILS</h2>
                    </Grid>
                  </div>
                </Card>
              </Card.Group>
            </div>
          </Container>
        </div>
    );
  }
}

export default Categories;
