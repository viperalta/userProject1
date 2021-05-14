import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import LoginForm from './components/LoginForm';
import Login from './views/Login';
import Register from './views/Register';

function App() {
  return (
    <div className="App">


      <Router>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
          <Register />
          </Route>
          <Route path='/'>

          </Route>
        </Switch>

      </Router>

      
      
      
    </div>
  );
}

export default App;
