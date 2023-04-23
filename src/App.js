import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((user) =>
        this.setState(() => {
          return { monsters: user };
        })
      );
  }
  // * On search change function
  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState({ searchField });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((el) =>
      el.name.toLowerCase().includes(searchField)
    );
    return (
      <div className="App">
        <h1 className="monster-title">Monster rolodex</h1>
        <SearchBox
          placeholder="Search Monster"
          className="search-box"
          onChange={onSearchChange}
        />
        <CardList monster={filteredMonsters} />
      </div>
    );
  }
}

export default App;
