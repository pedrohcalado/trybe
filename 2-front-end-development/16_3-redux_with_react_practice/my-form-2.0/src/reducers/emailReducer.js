const INITIAL_STATE = {
  name: '',
  email: '',
  habitation: '',
}

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_INPUT_EMAIL':
      return ({
        ...state,
        email: action.email,
      });
    case 'ADD_INPUT_NAME':
      return ({
        ...state,
        name: action.name,
      });
    case 'SELECTED_HABITATION':
      return ({
        ...state,
        habitation: action.habitation,
      });
    case 'CLEAR':
      return (INITIAL_STATE);
    default:
      return state;
  }
}

export default reducer;
