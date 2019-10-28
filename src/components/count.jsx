import React, { Component } from 'react';
import Counter from './counter';

class Count extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    }

    render() {
        return (
            <div>
                <button className="btn btn-secondary btn-sm m-2" onClick={this.handleReset}>Reset</button>
                {this.state.counters.map(counter => <Counter key={counter.id}
                    counter={counter} onDelete={this.handleDelete} />)}
            </div>
        );
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(counter => counter.id !== counterId);
        this.setState({ counters });
    }

    handleReset = () => {
        this.state.counters.forEach(counter => counter.value = 0);
        this.setState({ counters: this.state.counters });
    }
}

export default Count;
