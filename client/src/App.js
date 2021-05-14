import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm";
import Login from "./views/Login";
import Register from "./views/Register";

function App() {
  return (
    <div className="App">
      

      <Router>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Registro</Link>
          </li>
        </ul>
      </nav>


        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <h3>Probando login y registro</h3>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
