import { LOGIN } from "../actions";

const INITIAL_STATE = {
  login: false,
}
// não tem como importar aqui pq o reducer não está dentro do Provider
// const users = store.getState().users;

const loginReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOGIN:
      const usersWithEmail = action.users.filter(user => user.email === action.email);
      let passwordMatch = false;
      usersWithEmail.forEach(user => {
        return user.password === action.password ?
        passwordMatch = true :
        false;
      });
      return ({ login: passwordMatch })
    default:
      return state;
  }
}

export default loginReducer;
