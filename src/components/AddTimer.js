import React from 'react';
import store from '../store';

import TimerForm from './TimerForm';

class AddTimer extends React.Component {
  state = {
    createFormOpen: false
  };

  openCreateForm = () => {
    this.setState({createFormOpen: true});
  };

  handleFormSubmit = (timer) => {
    store.dispatch({
      type: 'CREATE_TIMER',
      timer: timer
    });
    this.setState({createFormOpen: false});
  };

  handleFormClose = () => {
    this.setState({createFormOpen: false});
  };

  render() {
    if (this.state.createFormOpen) {
      return (
        <div className='AddTimer'>
          <TimerForm 
            handleFormSubmit={this.handleFormSubmit}
            handleFormClose={this.handleFormClose}
          />
        </div>
      );
    }
    else {
      return (
        <div className='AddTimer mt-3 mb-3'>
          <button onClick={this.openCreateForm} className='btn btn-info d-block w-50 ml-auto mr-auto'>
            <i className="fa fa-plus mt-1 mr-1" aria-hidden="true"></i> Add a New Timer
          </button>
        </div>
      );
    }
  }
}

export default AddTimer;