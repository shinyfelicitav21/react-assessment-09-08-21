import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import NewAccount from './Components/NewAccount';
import AccountList from './Components/AccountList';

import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
     
        <li>
          <Link to="/login">LoginPage</Link>
        </li>
       
        <Switch>
         
          <Route path="/login" exact component={Login}></Route>
          <Route path="/dash" exact component={Dashboard}></Route>
          <Route path="/new" exact component={NewAccount}></Route>
          <Route path="/list" exact component={AccountList}></Route>
          </Switch>
      
    </Router>
  );
}

export default App;
