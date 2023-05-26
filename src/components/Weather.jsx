import React, { Component } from "react";
import Item from "./Item";
import Controls from "./Controls";

class Weather extends Component {
  render() {
    const { onSearchInput, onTempInput, list } = this.props;
    return (
      <>
        <Controls onSearchInput={onSearchInput} onTempInput={onTempInput} />
        {list.map((item) => {
          return <Item key={item.dt} item={item} />;
        })}
        ;
      </>
    );
  }
}

export default Weather;
