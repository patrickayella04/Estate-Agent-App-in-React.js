import './App.scss';
import HomePage from './components/pages/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignInPage from './components/pages/SignInPage';
import ProfilePage from './components/pages/ProfilePage';
import AppointmentsPage from './components/pages/AppoinmentsPage';
import CreateAppointmentsPage from './components/pages/CreateAppointments';
import CreatePropertiesPage from './components/pages/CreateProperties';
import CreateCustomersPage from './components/pages/CreateCustomers';
import ForgottenSignInPage from './components/pages/ForgottenSignInPage';
import CreateNewAccountPage from './components/pages/CreateNewAccount';

function App() {
  return (
    
    
    <>
      
      <Router> 
      
          <h1>
          <Switch>
              <Route path="/" exact component = {SignInPage} />
              <Route path="/home" component = {HomePage} />
              <Route path="/profile" component={ProfilePage} />
              <Route path="/apps" component={AppointmentsPage} />
              <Route path="/createApps" component={CreateAppointmentsPage} />
              <Route path="/createProp" component={CreatePropertiesPage} />
              <Route path="/createCustom" component={CreateCustomersPage} />
              <Route path="/forgottenPassword" component={ForgottenSignInPage} />
              <Route path="/createNewAccount" component={CreateNewAccountPage} />
            </Switch>
          </h1>
      </Router>
</>
    
  );
}

export default App;
