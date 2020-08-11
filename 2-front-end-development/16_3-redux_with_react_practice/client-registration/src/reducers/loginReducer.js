import { LOGIN } from "../actions";
import store from '../store';

const INITIAL_STATE = {
  login: false,
}
// não tem como importar aqui pq o reducer não está dentro do Provider
const users = store.getState().users;

const loginReducer = (state = INITIAL_STATE, {type, email, password}) => {
  switch(type) {
    case LOGIN:
      return users.forEach((user) =>
        {
          if(email === user.email && password === user.password) {
            return ({
              login: true,
            });
          }
          else return ({
            login: false,
          });
        }
      );
    default:
      return state;
  }
}

export default loginReducer;
