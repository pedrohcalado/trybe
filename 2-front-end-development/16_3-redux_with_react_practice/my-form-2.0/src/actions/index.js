export const nameCreator = (name) => ({
  type: 'ADD_INPUT_NAME',
  name: name.toUpperCase(),
})

export const emailCreator = (email) => ({
  type: 'ADD_INPUT_EMAIL',
  email
})

export const habitationCreator = (habitation) => ({
  type: 'SELECTED_HABITATION',
  habitation
})

