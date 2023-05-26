import React, { Component } from "react";
import axios from "axios";
import Weather from "./components/weather";
import "./App.css";

class App extends Component {
  state = { location: "London,UK" };

  async componentDidMount() {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.location}&appid=fa27250a3182e8c63f0b50b4c7b58d88`
    );
    this.setState({ weather: data });
  }

  onSearchInput = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  onTempInput = (e) => {
    this.setState({ tempInput: e.target.value });
  };

  getFilteredList = () => {
    const { weather, searchInput, tempInput } = this.state;

    let filteredList = [...weather.list];

    //filter by search
    if (searchInput) {
      filteredList = filteredList.filter((item) => {
        if (
          item.weather[0].description
            .toLowerCase()
            .includes(searchInput.toLowerCase())
        ) {
          return true;
        }
      });
    }

    //sort by temp
    if (tempInput === "asc") {
      filteredList.sort((itemOne, itemTwo) => {
        if (itemOne.main.temp > itemTwo.main.temp) return 1;
        if (itemOne.main.temp < itemTwo.main.temp) return -1;
      });
    } else if (tempInput === "desc") {
      filteredList.sort((itemOne, itemTwo) => {
        if (itemOne.main.temp > itemTwo.main.temp) return -1;
        if (itemOne.main.temp < itemTwo.main.temp) return 1;
      });
    }

    // return the result of the filter and the sort

    return filteredList;
  };

  render() {
    console.log(this.state);
    const { weather, searchInput } = this.state;
    if (!weather) return <p>Loading...</p>;

    //calculate the data we want to show

    return (
      <Weather
        list={this.getFilteredList()}
        onSearchInput={this.onSearchInput}
        onTempInput={this.onTempInput}
      />
    );
  }
}

export default App;
