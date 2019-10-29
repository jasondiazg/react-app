import React, { Component } from 'react';
import Counter from './counter';

class Count extends Component {
    render() {
        const {onDelete, onIncrement, onReset, counters} = this.props;
        return (
            <div>
                <button className="btn btn-secondary btn-sm m-2" onClick={onReset}>Reset</button>
                {counters.map(counter => <Counter
                    key={counter.id}
                    counter={counter}
                    onDelete={onDelete}
                    onIncrement={onIncrement} />)}
            </div>
        );
    }
}

export default Count;
