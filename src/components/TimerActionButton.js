import React from 'react';

class TimerActionButton extends React.Component {
  render() {
    if (this.props.timerIsRunning) {
      return (
        <button onClick={this.props.handleStopClick} className='btn btn-info d-block w-75 ml-auto mr-auto mt-3'>
          Stop
        </button>
      );
    }
    else {
      return (
        <button onClick={this.props.handleStartClick} className='btn btn-info d-block w-75 ml-auto mr-auto mt-3'>
          Start
        </button>
      );
    }
  }
}

export default TimerActionButton;