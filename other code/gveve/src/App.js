import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomepageContainer from './containers/HomepageContainer';
import Portfolio from './components/Portfolio';
import Bio from './components/Bio';
import Contact from './components/Contact';
import DoubleTaps from './components/DoubleTaps'
import HeaderContainer from './containers/HeaderContainer';
import Homepage from './components/Homepage';
import Projects from './components/Projects';
import Webdev from './components/Webdev';

class App extends Component {
  constructor(){
    super()

  }

  render() {
    return (
      <div>
        <HeaderContainer/>
        <Switch>
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/bio" component={Bio} />
          <Route path='/contact' component={Contact}/>
          <Route path='/likes' component={DoubleTaps}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/dev" component={Webdev}/>
        </Switch>
      </div>
    );
  }
}

export default App;
