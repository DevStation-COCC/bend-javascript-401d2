import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const Header = function(){
  return (
    <h1>This is my New Header</h1>
  )
}

const Footer = () => <footer><h3>&copy; Calvin Cheng 2019</h3></footer>

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      words: 'There is nothing in here to see',
    }
    this.handleWord = this.handleWord.bind(this);
  }


  handleClick = (e) => {
    // alert('I was clicked');
    console.log(this);
    e.preventDefault();
    let words = this.state.words 
      .split('')
      .reverse()
      .join('');

      this.setState({ words})
  };

  handleWord(e) {
    // alert('I changed');
    console.log(this);
    let words = e.target.value;
    this.setState({ words });
  }

  render() {
    return (
      <>
        <h3>My Main Component</h3>
        <div><h3>{this.state.words}</h3></div>
        <input onChange = {this.handleWord}/>
        <button onClick = {this.handleClick} >Click Me</button>
      </>
    );
  }
}


function App() {
  return (
    <div className="App">
      <h1>This is my awesome New Header</h1>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
