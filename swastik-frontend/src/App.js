import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import Footer from './components/footer/footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import Navbar from '../src/components/navbar/navbar'

function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <div >
    <Navbar/>
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
