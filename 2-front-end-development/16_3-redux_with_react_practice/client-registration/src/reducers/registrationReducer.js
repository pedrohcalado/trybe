import { REGISTER } from "../actions";

const INITIAL_STATE = [{
  id: 0,
  name: '',
  age: '',
  email: '',
  password: '',
}]

const users = (state = INITIAL_STATE, {type, name, age, email, password}) => {
  switch(type) {
    case REGISTER:
      return ([
        ...state, {
          id: state[state.length - 1].id + 1,
          name,
          age,
          email,
          password,
        }
      ])
    default:
      return state;
  }
}

export default users;
