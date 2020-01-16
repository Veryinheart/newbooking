import React, { useState } from 'react';

import { Button } from 'antd';
import './App.css';

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
      <header className="App-header">
        <Button type="primary" size="large">Primary</Button>
        <h2> call out to API on ther express backend </h2>
        <Button onClick={() => setRd()}>click to get API response</Button>
        <h3>{data}</h3>
      </header>
    </div>
  );
}

export default App;
