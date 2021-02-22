const initialState = {
  nome: ''
}

export const inputReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'NAME_':
      return {...state, nome: action.payload}
    default:
      return state;
  }
}