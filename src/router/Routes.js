import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from '../pages/About';
import Home from '../pages/Home';

import patientGamepage from '../pages/Patient/patientGamepage';
import patientHome from '../pages/Patient/patientHome';
import Result from '../pages/Patient/Result';
import adminHome from '../pages/Admin/Home';
import medicalHome from '../pages/Medical/MedicalHome';
import medicalView from '../pages/Medical/ViewPatientResults';
import AccountCreation from '../pages/Admin/AccountCreation';
import UploadQuestion from '../pages/Admin/UploadQuestion';
import medicalAssign from '../pages/Medical/medicalAssign';
import QuestionCreation from '../pages/Admin/QuestionCreation';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        {/* admin pages */}
        <Route exact path='/admin' component={adminHome} />
        <Route path='/admin/account' component={AccountCreation} />
        <Route path='/admin/upload' component={UploadQuestion} />
        {/* patient pages */}
        <Route path='/patientGamepage' component={patientGamepage} />
        <Route exact path='/patient' component={patientHome} />
        <Route path='/results'  component={Result} />
        {/* medical pages */}
        <Route exact path='/assign' component={medicalAssign} />
        <Route path='/:username/:uid/view' component={medicalView} />
        <Route exact path='/medical' component={medicalHome} />
        <Route exact path='/QuestionCreation' component={QuestionCreation} />
        
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
