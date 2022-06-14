const SET_RECORD = 'SET_RECORD'
const SET_FILTER_RECORD = 'SET_FILTER_RECORD'

let initialState = {
  records: [],
  filterRecords: []
}

const recordReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RECORD:
      return {...state, records: action.rec}
    case SET_FILTER_RECORD:
      return {...state, filterRecords: action.rec}
    default:
      return state
  }
}

export const setRecordAC = (rec) => ({type: SET_RECORD, rec})
export const setFilterRecordAC = (rec) => ({type: SET_FILTER_RECORD, rec})

export default recordReducer