import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/navigation_bar';
import Plans from './views/plans';
import About from './views/about';
import Contact from './views/contact';
import Home from './views/home';

class App extends React.PureComponent {
  render() {
    return (
      <>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />¸
            <Route path="/plans" component={Plans} />¸
            <Route path="/about" component={About} />¸
            <Route path="/contact" component={Contact} />¸
            <Route component={Home} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
