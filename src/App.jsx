import React, { Component } from 'react';
import './app.scss';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Content, Theme } from '@carbon/react';
import MainHeader from './components/MainHeader';
import LandingPage from './content/LandingPage';
import SchemaPage from './content/SchemaPage';
import TaskPage from './content/TaskPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Theme theme="g100">
          <MainHeader />
        </Theme>
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/schemas" exact component={SchemaPage} />
            <Route path="/tasks" exact component={TaskPage} />
          </Switch>
        </Content>
      </BrowserRouter>
    );
  }
}

export default App;
