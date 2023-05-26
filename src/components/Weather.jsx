import React, { Component } from "react";
import Item from "./Item";
import Search from "./Search";

class Weather extends Component {
  render() {
    const { onSearchInput, list } = this.props;
    return (
      <>
        <Search onSearchInput={onSearchInput} />
        {list.map((item) => {
          return <Item key={item.dt} item={item} />;
        })}
        ;
      </>
    );
  }
}

export default Weather;
