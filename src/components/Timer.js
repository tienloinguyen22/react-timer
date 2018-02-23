import React from 'react';
import store from '../store'
import helpers from '../helpers';

import TimerActionButton from './TimerActionButton';

class Timer extends React.Component {
  componentDidMount() {
    this.forceUpdateInterval = setInterval(() => {this.forceUpdate()}, 50);
  }

  componentWillUnmount() {
    clearInterval(this.forceUpdateInterval);
  };

  handleStartClick = () => {
    store.dispatch({
      type: 'START_TIMER',
      id: this.props.id
    });
  };

  handleStopClick = () => {
    store.dispatch({
      type: 'STOP_TIMER',
      id: this.props.id
    });
  };

  openEditForm = () => {
    this.props.openEditForm();
  }

  handleDeleteClick = () => {
    store.dispatch({
      type: 'DELETE_TIMER',
      id: this.props.id
    });
  };

  render() {
    let elapsedString = helpers.renderElapsedString(this.props.elapsed, this.props.runningSince);
    return (
      <div className='Timer border rounded mt-3'>
        <h4 className='title w-75 ml-auto mr-auto mt-3 border-bottom'>{this.props.title}</h4>
        <p className='project w-75 ml-auto mr-auto border-bottom'>{this.props.project}</p>
        <h1 className='elapsed text-warning text-center'>{elapsedString}</h1>
        <div className='icons w-75 ml-auto mr-auto'>
          <button onClick={this.openEditForm} className='edit btn btn-info w-50'><i className="fa fa-pencil" aria-hidden="true"></i></button>
          <button onClick={this.handleDeleteClick} className='delete btn btn-danger w-50'><i className="fa fa-trash" aria-hidden="true"></i></button>
        </div>
        <div className='buttons mt-3 mb-3'>
          <TimerActionButton 
            timerIsRunning={!!this.props.runningSince}
            handleStartClick={this.handleStartClick}
            handleStopClick={this.handleStopClick}
          />
        </div>
      </div>
    );
  }
}

export default Timer;