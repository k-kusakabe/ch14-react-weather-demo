import React, { Component } from "react";

class Controls extends Component {
  state = {};
  render() {
    const { onSearchInput, onTempInput } = this.props;

    return (
      <>
        <input onInput={onSearchInput} type="text" />
        <select onChange={onTempInput}>
          <option value=""></option>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
      </>
    );
  }
}

export default Controls;
