import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from '../pages/About';
import Home from '../pages/Home';
import medicalAssignlevel from '../pages/Medical/medicalAssignlevel'
import patientGamepage from '../pages/Patient/patientGamepage';
import patientHome from '../pages/Patient/patientHome';
import Result from '../pages/Patient/Result';
import adminHome from '../pages/Admin/Home';
import medicalHome from '../pages/Medical/MedicalHome';
import medicalView from '../pages/Medical/ViewPatientResults';


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        {/* admin pages */}
        <Route path='/admin' component={adminHome} />
        {/* patient pages */}
        <Route path='/patientGamepage' component={patientGamepage} />
        <Route path='/patient' component={patientHome} />
        <Route path='/results' component={Result} />
        {/* medical pages */}
        <Route path='/:username/assign' component={medicalAssignlevel} />
        <Route path='/:username/view' component={medicalView} />
        <Route path='/medical' component={medicalHome} />
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
