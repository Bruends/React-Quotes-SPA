import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const style = {
  textAlign: 'center',
  marginTop: '80px'
};

class CenterLayout extends Component {
  render () {
    return (
      <div style={style}>
        <Grid>
          <Row className='show-grid'>
            <Col xs={8} xsOffset={2}>
              { this.props.children }
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default CenterLayout;
