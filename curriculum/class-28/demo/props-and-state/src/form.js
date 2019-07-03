import React from 'react';

export default class Form extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.props.handler}>
        <button>{this.props.prompt}</button>
      </form>
    )
  }
}