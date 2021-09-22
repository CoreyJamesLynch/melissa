import React from 'react';
import Greeting from '../components/greeting';

class Home extends React.PureComponent {
  render() {
    return (
      <>
        <Greeting />
      </>
    );
  }
}

export default Home;
