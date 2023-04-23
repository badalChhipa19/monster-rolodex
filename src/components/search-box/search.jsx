import { Component } from 'react';
import './search-box.styles.css';

class SearchBox extends Component {
  // constructor() {
  // }
  render() {
    const { className, placeholder, onChange } = this.props;
    // console.log(this.props);

    return (
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  }
}

export default SearchBox;
