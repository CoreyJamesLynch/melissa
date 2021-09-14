import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from '../components/navbar';

class Plans extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Container>
          <h1>This is the Plans Page!!!!</h1>
        </Container>
      </>
    );
  }
}

export default Plans;
