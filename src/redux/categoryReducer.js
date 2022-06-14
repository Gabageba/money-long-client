const SET_CATEGORY = 'SET_CATEGORY'

let initialState = {
  categories: [],
}

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {...state, categories: action.cat}
    default:
      return state
  }
}

export const setCategoryAC = (cat) => ({type: SET_CATEGORY, cat})

export default categoryReducer