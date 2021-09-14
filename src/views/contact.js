import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from '../components/navbar';

class Contact extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Container>
          <h1>This is the Contact Page!!!!</h1>
        </Container>
      </>
    );
  }
}

export default Contact;
