import React from 'react';
import store from '../store';

import TimerForm from './TimerForm';
import Timer from './Timer';

class TimerContainer extends React.Component {
  state = {
    editFormOpen: false
  };

  openEditForm = () => {
    this.setState({editFormOpen: true});
  };

  handleFormClose = () => {
    this.setState({editFormOpen: false});
  }

  handleFormSubmit = (timer) => {
    store.dispatch({
      type: 'EDIT_TIMER',
      timer: timer
    });
    this.setState({editFormOpen: false});  
  };

  render() {
    if (this.state.editFormOpen) {
      return (
        <div className='TimerContainer'>
          <TimerForm
            title={this.props.title}
            project={this.props.project}
            id={this.props.id}
            handleFormSubmit={this.handleFormSubmit}
            handleFormClose={this.handleFormClose} 
          />
        </div>
      );
    }
    else {
      return (
        <div className='TimerContainer'>
          <Timer
             title={this.props.title}
             project={this.props.project}
             id={this.props.id}
             elapsed={this.props.elapsed}
             runningSince={this.props.runningSince}
             openEditForm={this.openEditForm}
          />
        </div>
      );
    }
  }
}

export default TimerContainer;