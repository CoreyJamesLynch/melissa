import React from 'react';
import { Container } from 'react-bootstrap';
import Greeting from '../components/greeting';

class Home extends React.PureComponent {
  render() {
    return (
      <>
        <Container>
          <Greeting />
        </Container>
      </>
    );
  }
}

export default Home;
