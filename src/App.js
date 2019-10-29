import React, { Component } from 'react';
import "./App.css";
import Navbar from "./components/navbar";
import Count from "./components/count";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({ counters });
  };

  handleReset = () => {
    this.state.counters.forEach(counter => (counter.value = 0));
    this.setState({ counters: this.state.counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    counters[counters.indexOf(counter)].value++;
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar total={this.state.counters.filter(counter => counter.value > 0).length} />
        <main className="container">
          <Count
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
