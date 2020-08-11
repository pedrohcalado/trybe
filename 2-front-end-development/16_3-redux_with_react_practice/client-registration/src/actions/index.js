export const REGISTER = 'REGISTER';

const registerCreator = ({name, age, email}) => ({
  type: REGISTER,
  name,
  age,
  email,
})

export default registerCreator;
