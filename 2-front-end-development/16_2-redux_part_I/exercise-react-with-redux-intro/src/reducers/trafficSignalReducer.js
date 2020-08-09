import { CHANGE_SIGNAL } from '../redux/actionCreators';

const initialState = {
  signal: {
    color: 'red',
  },
}

export default function trafficSignalReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SIGNAL:
      return { ...state, signal: { ...state.signal, color: action.payload } };
    default:
      return state;
  }
}