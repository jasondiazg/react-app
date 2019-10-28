import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: this.props.counter.value
    };

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm" onClick={this.handleIncrement}>Increment</button>
                <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        const baseClasses = 'badge m-2 badge-';
        return baseClasses + (this.state.count === 0 ? 'warning' : 'primary');
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
    }
}

export default Counter;