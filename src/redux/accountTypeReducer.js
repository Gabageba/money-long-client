const SET_ACCOUNT_TYPE = 'SET_ACCOUNT_TYPE'

let initialState = {
  accountTypes: [],
}

const accountTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACCOUNT_TYPE:
      return {...state, accountTypes: action.types}
    default:
      return state
  }
}

export const setAccountTypesAC = (types) => ({type: SET_ACCOUNT_TYPE, types})

export default accountTypeReducer