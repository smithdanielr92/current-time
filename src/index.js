// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
class App extends React.Component {
    state = { time: new Date().toLocaleTimeString() };

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: new Date().toLocaleTimeString() }), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <div>
                <div>Current Time:</div>
                <h3>{this.state.time}</h3>
            </div>
            );
        }
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)