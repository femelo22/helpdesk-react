import { Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SinUp';
import Router from './Route';

export default function Routes() {
  return <Switch>
    <Router exact path='/' component={SignIn} />
    <Router exact path='/register' component={SignUp} />
    <Router exact path='/dashboard' component={Dashboard} isPrivate/>
  </Switch>;
}
