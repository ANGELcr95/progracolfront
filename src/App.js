import './App.css';
import React from "react";
import AuthProvider from './Auth/AuthProvider';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import Home from "./components/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Login';
import Pages from './components/Pages';
import Figura from './components/Figura';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <AuthProvider>  

        <PublicRoute exact path='/login' component={Login}/>
 
        <PrivateRoute exact path='/pages/figura' component={Figura}/>
        <PrivateRoute exact path='/pages' component={Pages}/>

         <Route exact path='/' component={Home}/>
       </AuthProvider>
       </Switch>
    </Router>
    </div>
  );
}

export default App;