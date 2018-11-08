import React from 'react';
import Title from './components/Title.js';
import Weather from './components/Weather.js';
import Form from './components/Form.js';

const API_KEY = 'ebd4181f3d9a14fe53e8057b84f578a4';

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);;
    const data = await api_call.json(); //converts the data received to JSON format

    console.log(data.message);

    if (city && country) {
      this.setState({temperature: data.main.temp, city: data.name, country: data.sys.country, humidity: data.main.humidity, description: data.weather[0].description})
    } else {
      this.setState({error: data.message})
    }
  }

  render() {
    return (<div>
      <Title/>
      <Form getWeather={this.getWeather}/>
      <Weather temperature={this.state.temperature} city={this.state.city} country={this.state.country} humidity={this.state.humidity} description={this.state.description} error={this.state.error}/>
    </div>);
  }
}

export default App;
