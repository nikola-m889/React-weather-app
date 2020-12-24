import React from "react";
import Axios from "axios";
import "./App.css";
import Form from "./components/Form.js";
import DisplayWeather from "./components/DisplayWeather.js";

const api_key = "7b66bccc6f3564d2b8f6fa998a70affd";

class App extends React.Component {
  state = {
    input: "",
    coordinations: {
      latitude: undefined,
      longitude: undefined,
    },
    weatherDetails: {},
  };

  convertTemp(t) {
    let temp = Math.floor(t - 273.15);
    return temp;
  }

  componentDidMount() {
    this.navSet();
  }

  navSet() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let geoLoc = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        this.setState({ coordinations: geoLoc });

        Axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.coordinations.latitude}&lon=${this.state.coordinations.longitude}&appid=${api_key}`
        ).then((res) => {
          let infoWeather = {
            location: res.data.main.name,
            temperature: this.convertTemp(res.data.main.temp),
            temperature_min: this.convertTemp(res.data.main.temp_min),
            temperature_max: this.convertTemp(res.data.main.temp_max),
            humidity: res.data.main.humidity,
            pressure: res.data.main.pressure,
            wind_speed: res.data.wind.speed,
            wind_deg: res.data.wind.deg,
            timezone: res.data.timezone,
            sunrise: new Date(res.data.sys.sunrise * 1000).toLocaleTimeString(),
            sunset: new Date(res.data.sys.sunset * 1000).toLocaleTimeString(),
            descriptions: res.data.weather[0].main,
            region: res.data.name,
            country: res.data.sys.country,

            img:
              "http://openweathermap.org/img/wn/" +
              res.data.weather[0].icon +
              ".png",
          };
          console.log(res);
          this.setState({ weatherDetails: infoWeather });
        });
      });
    }
  }

  addInputData = (event) => {
    this.setState({ input: event });
  };

  changeRegion = (e) => {
    e.preventDefault();

    Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.input}&appid=${api_key}`
    ).then((res) => {
      let infoWeather = {
        location: res.data.main.name,
        temperature: this.convertTemp(res.data.main.temp),
        temperature_min: this.convertTemp(res.data.main.temp_min),
        temperature_max: this.convertTemp(res.data.main.temp_max),
        humidity: res.data.main.humidity,
        pressure: res.data.main.pressure,
        wind_speed: res.data.wind.speed,
        wind_deg: res.data.wind.deg,
        timezone: res.data.timezone,
        sunrise: new Date(res.data.sys.sunrise * 1000).toLocaleTimeString(),
        sunset: new Date(res.data.sys.sunset * 1000).toLocaleTimeString(),
        descriptions: res.data.weather[0].main,
        region: res.data.name,
        country: res.data.sys.country,

        img:
          "http://openweathermap.org/img/wn/" +
          res.data.weather[0].icon +
          ".png",
      };
      console.log(res);
      this.setState({ weatherDetails: infoWeather });
    });
  };

  render() {
    return (
      <div
        className={
          this.state.weatherDetails.temperature < 12 ? "App cold" : "App"
        }
      >
        <div className="container">
          <Form
            changeRegion={this.changeRegion}
            changeInput={this.addInputData}
          />
          <DisplayWeather weatherData={this.state.weatherDetails} />
        </div>
      </div>
    );
  }
}

export default App;
