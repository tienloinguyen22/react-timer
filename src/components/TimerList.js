import React from 'react';

import TimerContainer from './TimerContainer';

class TimerList extends React.Component {
  render() {
    let timers = this.props.timers.map((timer) => {
      return (
        <TimerContainer
          key={timer.id}
          id={timer.id}
          title={timer.title}
          project={timer.project}
          elapsed={timer.elapsed}
          runningSince={timer.runningSince}
        />
      );
    });
    return (
      <div className='TimerList'>
        {timers}
      </div>
    );
  }
}

export default TimerList;