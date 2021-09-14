import React from 'react';
import NavBar from '../components/navbar';
import { Container } from 'react-bootstrap';

class Home extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Container>
          <h1>This is the Home Page!!!!</h1>
        </Container>
      </>
    );
  }
}

export default Home;
