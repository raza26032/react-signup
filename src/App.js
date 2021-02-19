import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/home/home.jsx"
import Login from "./components/login/login.jsx"
import Signup from "./components/signup/signup.jsx"
import Dashboard from "./components/dashboard/dashboard.jsx"

function App() {
  return (
    <div>
      <Router>
        <img src={('https://i.pinimg.com/originals/58/5a/10/585a10ec06e01b60aadc4dca4c2ddbe6.png')} />
        <div className="App">
          {/* <input type="search" id="header-search-bar" name="q" placeholder="Search" value="" /> */}
          <nav className="nav">
            <Link to="/" className="first">Home</Link>
            <Link to="/login" className="one">login</Link>
            <Link to="/signup" className="two">Signup</Link>
            <Link to="/dashboard" className="three">Profile</Link>
          </nav>
        </div>

        <Switch>

          <Route exact={true} path="/">
            <Home />
          </Route>

          <Route exact={true} path="/login">
            <Login />
          </Route>


          <Route path="/dashboard">
            <Dashboard />
          </Route>


          <Route path="/signup">
            <Signup />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;