import React from 'react';
import Title from './components/Title.js';
import Weather from './components/Weather.js'
import Form from './components/Form.js'

const API_KEY = 'd1d487c71ce055800753277f31bce34f';

class App extends React.Component{

  getWeather= async ()=>{
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}$units=metric`);
      const data =  await api_call.json();//converts the data received to JSON format
  }

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
