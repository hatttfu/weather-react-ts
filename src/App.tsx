import React from 'react';
import searchIcon from './images/search.png';
import sunIcon from './images/sun.png'

function App() {
  return (
    <div className="App">
      <div className="container">
          <header className="header">
              the.weather
          </header>
          <main className="main">
              <div className="info-block">
                  <div className="temperature">52°</div>
                  <div className="place-time">
                      <div className="place">London</div>
                      <div className="time-info">
                          <div className="time">10:36 </div>-
                          <div className="weekday">Tuesday</div>
                          <div className="date">22 Oct '19</div>
                      </div>
                  </div>
                  <div className="description">
                      <div className="icon">
                          <img src={sunIcon} alt="" />
                      </div>
                      <div className="icon-info">
                          Sunny
                      </div>
                  </div>
              </div>
          </main>
          <div className="search">
              <button className="search-button">
                  <img src={searchIcon} alt="Check weather" />
              </button>
              <div className="form">
                  <input type="search" placeholder="Type city here..." className="search-town" />
                  <div className="details">
                      <h3>Weather Details</h3>
                      <div className="weather-block">
                          <div>
                              <div className="name">Cloudy</div>
                              <div className="value">12%</div>
                          </div>
                          <div>
                              <div className="name">Cloudy</div>
                              <div className="value">12%</div>
                          </div>
                          <div>
                              <div className="name">Cloudy</div>
                              <div className="value">12%</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
