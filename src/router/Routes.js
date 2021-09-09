import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from '../pages/About';
import Home from '../pages/Home';
import medicalAssignlevel from '../pages/Medicalpages/medicalAssignlevel'
import patientGamepage from '../pages/Patient/patientGamepage';
import patientHome from '../pages/Patient/patientHome';



class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/medicalAssignlevel' component = {medicalAssignlevel} />
        <Route path='/patientGamepage' component = {patientGamepage} />
        <Route path='/patientHome' component = {patientHome} />
        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
