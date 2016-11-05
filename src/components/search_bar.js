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
      <div className="search-bar">
        <input
        value = {this.state.term} // Makes input a controlled form element.
        onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
