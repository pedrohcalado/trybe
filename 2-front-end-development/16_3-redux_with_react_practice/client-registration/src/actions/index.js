export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';

export const registerCreator = ({name, age, email, password}) => ({
  type: REGISTER,
  name,
  age,
  email,
  password,
});

export const loginCreator = ({email, password}) => ({
  type: LOGIN,
  email,
  password,
});
