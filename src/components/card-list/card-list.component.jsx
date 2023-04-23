import { Component } from 'react';
import './card-list.styles.css';
import './card.styles.css';

class CardList extends Component {
  render() {
    const { monster } = this.props;
    return (
      <div className="card-list">
        {monster.map((monster) => {
          const { name, id, email } = monster;
          return (
            <div className="card-container" key="id">
              <img
                src={`https://robohash.org/${id}?set=set2`}
                alt={`Monster ${name}`}
              />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default CardList;
