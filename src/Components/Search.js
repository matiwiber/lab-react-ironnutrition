import React, { Component } from 'react';

export default class Search extends Component {
  state = {
    searchString: '',
  };

  render() {
    // const { searchString, search } = this.props;
    return (
      <div>
        <label>
          Search:
          <input
            type="text"
            name="search"
            value={this.props.searchString}
            onChange={this.props.search}
          />
        </label>
      </div>
    );
  }
}
