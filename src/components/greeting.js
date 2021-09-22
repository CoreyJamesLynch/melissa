import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Melissa from '../assets/melissa.jpeg';

const Greeting = () => (
  <>
    <section className="bg-white text-dark p-5 text-center text-sm-start">
      <Container>
        <div className="d-sm-flex align-items-center justify-content-between">
          <div>
            <h1>Be Your Best Self</h1>
            <p className="lead my-4">
              I will help you improve your life and conquer your goals through
              small changes to your diet. Schedule a consolation to take the
              first step changing your life forever.
            </p>
            <Button variant="success" size="lg">
              Commit
            </Button>
          </div>
          <img
            className="img-fluid w-50 d-none d-sm-block"
            src={Melissa}
            alt=""
          />
        </div>
      </Container>
    </section>
  </>
);

export default Greeting;
