import React, { Component } from "react";

class Item extends Component {
  state = {};

  render() {
    const { item } = this.props;

    return (
      <div className="weatherItem">
        <p>Date: {new Date(item.dt * 1000).toLocaleDateString()}</p>
        <p>Temp: {Math.round(item.main.temp - 273.15)}&#8451;</p>
        <p>Desc: {item.weather[0].description} </p>
        <img
          src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
          alt={item.weather[0].description}
        />
      </div>
    );
  }
}

export default Item;
