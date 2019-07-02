import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Counter from './components/Counter';

import './app.scss';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
