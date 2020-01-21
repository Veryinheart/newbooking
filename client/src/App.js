import React, { useState } from 'react';
// import Layout from './layout/layout';
import { Button } from 'antd';


import './App.css';
import Login from './component/Login';
import Signup from './component/Signup'
import Home from './component/Home';
import Header from './layout/header';
import {
  BrowserRouter as Router,
  //HashRouter,
  Route,
  Switch
} from 'react-router-dom';



function App() {

  const [data, setData] = useState('');

  const callAPI = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  const setRd = () => {
    callAPI()
      .then(body => { setData(body.express) })
      .catch(err => console.log(err))
  }

  return (

    <Router>





      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} /> 

          <Route exact path="/Signup" component={Signup} /> 

          <Route exact path="/Login" component={Login} /> 
          <Route exact path="/Header" component={Header} /> 
        </Switch>
      </div>


    </Router>
  );
}

export default App;
