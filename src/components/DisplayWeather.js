import React from "react";

export default function DisplayWeather(props) {
  const {
    temperature,
    temperature_min,
    temperature_max,
    humidity,
    pressure,
    wind_speed,
    wind_deg,
    timezone,
    sunrise,
    sunset,
    descriptions,
    region,
    country,
    img,
  } = props.weatherData;

  return (
    <div class="display-container">
      <div className="user-weather">
        <div className="weather-row">
          <div className="weather-upper">
            <div className="wfirst">
              <div className="wcountry">
                {region},&nbsp;&nbsp;{country}
              </div>
            </div>
            <div className="wsecond">
              <div className="column-temp">
                {temperature}
                <sup>o</sup>
              </div>
              <div className="column-icon">
                <img src={img} />
              </div>
            </div>
            <div className="w-fix"></div>
            <div className="wthird">
              <div className="weather-desc">{descriptions}</div>
            </div>
          </div>
        </div>
        <div className="weather-stats">
          <div className="stats-container">
            <div className="weather-row">
              <div className="weather-column">
                <span>High temperature:</span>
                <span>{temperature_max}</span>
              </div>
              <div className="weather-column">
                <span>Pressure:</span>
                <span>{pressure}</span>
              </div>
              <div className="weather-column">
                <span>Sunrise:</span>
                <span>{sunrise}</span>
              </div>
            </div>
            {/*row 1 end*/}
            <div className="weather-row">
              <div className="weather-column">
                <span>Low temperature:</span>
                <span>{temperature_min}</span>
              </div>
              <div className="weather-column">
                <span>Wind speed:</span>
                <span>{wind_speed}</span>
              </div>
              <div className="weather-column">
                <span>Sunset:</span>
                <span>{sunset}</span>
              </div>
            </div>
            {/*row 2 end*/}
            <div className="weather-row">
              <div className="weather-column">
                <span>Humidity:</span>
                <span className="hum">{humidity}</span>
              </div>
              <div className="weather-column">
                <span>Wind direction:</span>
                <span>{wind_deg}</span>
              </div>
              <div className="weather-column">
                <span>Timezone:</span>
                <span>{timezone}</span>
              </div>
            </div>
            {/*row 3 end*/}
          </div>
        </div>
      </div>
    </div>
  );
}
