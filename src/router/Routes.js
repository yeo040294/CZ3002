import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';

import patientGamepage from '../pages/Patient/patientGamepage';
import patientReadypage from '../pages/Patient/patientReadypage';
import patientResultpage from '../pages/Patient/patientResultpage';
import patientHome from '../pages/Patient/patientHome';
import Result from '../pages/Patient/Result';
import adminHome from '../pages/Admin/Home';
import medicalHome from '../pages/Medical/MedicalHome';
import medicalView from '../pages/Medical/ViewPatientResults';
import AccountCreation from '../pages/Admin/AccountCreation';
import medicalAssign from '../pages/Medical/medicalAssign';
import medicalAssignAuto from '../pages/Medical/medicalAssignAuto';
import QuestionCreation from '../pages/Admin/QuestionCreation';
import AssignResult from '../pages/Medical/AssignResult';
import Logout from '../pages/Logout';
import Profile from '../pages/Profile';
import End from '../components/Patient/End';
import CreateResult from '../pages/Admin/CreateResult';


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/logout' component={Logout} />
        <Route path='/profile' component={Profile} />
        {/* admin pages */}
        <Route exact path='/admin' component={adminHome} />
        <Route path='/admin/account' component={AccountCreation} />
        <Route path='/admin/upload' component={QuestionCreation} />
        <Route exact path='/admin/assign/result' component={CreateResult} />
        {/* patient pages */}
        <Route path='/patientGamepage' component={patientGamepage} />
        <Route path='/patientReadypage' component={patientReadypage} />
        <Route path='/patientResultpage' component={patientResultpage} />
        <Route exact path='/patient' component={patientHome} />
        <Route path='/results'  component={Result} />
        <Route path='/end'  component={End} />
        {/* medical pages */}
        <Route exact path='/:username/:uid/assign' component={medicalAssign} />
        <Route path='/:username/:uid/view' component={medicalView} />
        <Route exact path='/medical' component={medicalHome} />
        <Route exact path='/:username/:uid/assign/auto' component={medicalAssignAuto} />
        <Route exact path='/QuestionCreation' component={QuestionCreation} />
        <Route exact path='/medical/assign/result' component={AssignResult} />

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
