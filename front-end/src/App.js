import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ListUsers from './pages/ListUsers';
import EditUser from './pages/EditUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/users" exact component={ListUsers} />
          <Route path="/users/:id" component={EditUser} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
