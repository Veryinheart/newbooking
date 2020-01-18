import React, { useState } from 'react';
// import Layout from './layout/layout';
import { Button } from 'antd';

import Header from './layout/header';
import './App.css';
import Login from './component/Login';
import Signup from './component/Signup'


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
    <div className="App">

      {/* <Login></Login> */}
      <Signup></Signup>
      {/* <Header></Header> */}
      {/* <Layout></Layout> */}
      {/* <header className="App-header">
        <Button type="primary" size="large">Primary</Button>
        <h2> call out to API on ther express backend </h2>
        <Button onClick={() => setRd()}>click to get API response</Button>
        <h3>{data}</h3>
      </header> */}
    </div>
  );
}

export default App;
