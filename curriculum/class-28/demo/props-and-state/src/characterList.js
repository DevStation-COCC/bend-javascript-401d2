import React from 'react';

export default class CharacterList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      characters: this.props.characters || {}
    };
  }

  componentWillReceiveProps({characters}){
    this.setState({...this.state, characters});
  }

  render() {
    return (
      <>
        <ul>
          {Object.keys(this.state.characters).map((key, idx) => {
            return (
              <li key={idx}>
                <a href={this.state.characters[key]}>{key}</a>
              </li>
            )
          })}
        </ul>
      </>
    );
  }
}