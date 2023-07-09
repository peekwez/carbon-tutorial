import React, { Component } from 'react';
import './app.scss';
import { Content, Theme } from '@carbon/react';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import SchemaPage from './content/SchemaPage';
import TaskPage from './content/TaskPage';
import DemoPage from './content/DemoPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Theme theme="g100">
          <TutorialHeader />
        </Theme>
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
            <Route path="/schemas" component={SchemaPage} />
            <Route path="/tasks" component={TaskPage} />
            <Route path="/demos" component={DemoPage} />
          </Switch>
        </Content>
      </BrowserRouter>
    );
  }
}

export default App;
