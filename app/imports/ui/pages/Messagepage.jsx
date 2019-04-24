import React from 'react';
import { Container, Divider, Grid } from 'semantic-ui-react';
import MessageFeed from '/imports/ui/components/MessageFeed';
import MessageHead from '/imports/ui/components/MessageHead';

/** A simple static component to render some text for the landing page. */
class Messagepage extends React.Component {

  render() {
    return (
        <div className='generalPageMargin'>
          <Container>
            <Grid centered columns={3}>
              <Grid.Row centered>
                <Grid.Column>
                  <div className='messagebgpage fauxBoxShadow'>
                    <MessageHead/>
                    <Divider hidden/>
                    <MessageFeed/>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
    );
  }
}

export default Messagepage;
