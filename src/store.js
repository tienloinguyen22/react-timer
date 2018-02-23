import { createStore } from 'redux';
import helpers from './helpers';

let initialState = {
  timers: []
};

let reducer = (state, action) => {
  if (action.type === 'START_TIMER') {
    let now = Date.now();
    return {
      timers: state.timers.map((timer) => {
        if (action.id === timer.id) {
          return Object.assign({}, timer, {runningSince: now});
        } else {
          return timer;
        }
      })
    };
  } else if (action.type === 'STOP_TIMER') {
    let now = Date.now();
    return {
      timers: state.timers.map((timer) => {
        if (action.id === timer.id) {
          let lastElapsed = now - timer.runningSince;
          return Object.assign({}, timer, {elapsed: timer.elapsed + lastElapsed, runningSince: null});
        } else {
          return timer;
        }
      })
    };
  } else if (action.type === 'EDIT_TIMER') {
    return {
      timers: state.timers.map((timer) => {
        if (action.timer.id === timer.id) {
          return Object.assign({}, timer, {title: action.timer.title, project: action.timer.project});
        } else {
          return timer;
        }
      })
    };
  } else if (action.type === 'CREATE_TIMER') {
    let t = helpers.newTimer(action.timer);
    return {
      timers: state.timers.concat(t)
    };
  } else if (action.type === 'DELETE_TIMER') {
    return {
      timers: state.timers.filter((timer) => timer.id !== action.id)
    };
  } else {
    return state;
  }
};

let store = createStore(reducer, initialState);

export default store;