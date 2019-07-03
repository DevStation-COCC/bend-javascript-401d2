import React from 'react';
import superagent from 'superagent';

import Form from './form';
import CharacterList from './characterList';

import './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      results: {}
    };
  }

  handleForm = (count, results) => {
    this.setState({count, results});
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    let data = await superagent.get('https://swapi.co/api/people/');
    let count = data.body.count;
    let people = data.body.results.reduce((list, person) => {
      list[person.name] = person.url;
      return list;
   }, {});

   this.handleForm(count, people);
  }

  render() {
    return (
      <div>
        <Form handler={this.handleSubmit} prompt="Get Star Wars peoples" />

        <CharacterList characters={this.state.results} />

        {/* <ul>
          {Object.keys(this.state.results).map((key, idx) => {
            return (
              <li key={idx}>
                <a href={this.state.results[key]}>{key}</a>
              </li>
            )
          })}
        </ul> */}
      </div>
    );
  }
}

export default App;
