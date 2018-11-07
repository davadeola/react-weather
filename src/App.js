import React from 'react';
import Title from './components/Title.js';
import Weather from './components/Weather.js'
import Form from './components/Form.js'

class App extends React.Component{
  render(){
    return(
      <div>
        <Title/>
        <Form/>
        <Weather/>
      </div>
    );
  }
}

export default App;
