import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Appointment } from './pages/Appointment';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import Service from './pages/Service';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/agendamento">
          <Appointment />
        </Route>
        <Route path="/servico">
          <Service />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
