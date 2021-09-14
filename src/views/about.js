import React from 'react';
import NavBar from '../components/navbar';
import { Container } from 'react-bootstrap';

class About extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Container>
          <h1>This is the About Page!!!!</h1>
        </Container>
      </>
    );
  }
}

export default About;
