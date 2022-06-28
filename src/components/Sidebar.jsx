import React from 'react'

function Sidebar() {
  return (
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
  )
}

export default Sidebar