import { REQUEST_INFOS, RECEIVE_INFOS, FAILED_REQUEST } from '../actions';

const INITIAL_STATE = {
  character: '',
  loading: false,
  error: '',
}

export default function infosReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case REQUEST_INFOS:
      return ({
        ...state,
        loading: true,
      })
    case RECEIVE_INFOS:
      return ({
        ...state,
        character: action.infos,
        loading: false,
      })
    case FAILED_REQUEST:
      return ({
        ...state,
        loading: false,
        error: action.error,
      })
    default:
      return state;
  }
}
