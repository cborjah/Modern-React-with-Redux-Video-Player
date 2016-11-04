import React, { Component } from 'react';

class SearchBar extends Component { // Class based components must always have a render method.
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
  }
  render() {
    return (
      <input
      value = {this.state.term} // Makes input a controlled form element.
      onChange={event => this.setState({ term: event.target.value })} />
    );
  }
}

export default SearchBar;
