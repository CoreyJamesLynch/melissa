import React from 'react';
import NavBar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Plans from './views/plans';
import About from './views/about';
import Contact from './views/contact';
import Home from './views/home';

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />¸
          <Route path='/plans' component={Plans} />¸
          <Route path='/about' component={About} />¸
          <Route path='/contact' component={Contact} />¸
          <Route component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
