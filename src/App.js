import React from 'react';
import store from './store';
import './App.css';

import TimerList from './components/TimerList';
import AddTimer from './components/AddTimer';


class App extends React.Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  render() {
    let timers = store.getState().timers;
    return (
      <div className='App mb-4'>
        <TimerList 
          timers={timers}
        />
        <AddTimer
        />
      </div>
    );
  }
}

export default App;
