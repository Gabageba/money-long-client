const SET_ACCOUNTS = 'SET_ACCOUNTS'
const SET_ACCOUNT = 'SET_ACCOUNT'

let initialState = {
  colors: [
    {id: 1, color: '#26C6DA'},
    {id: 2, color: '#0097A7'},
    {id: 3, color: '#0D47A1'},
    {id: 4, color: '#1565C0'},
    {id: 5, color: '#039BE5'},
    {id: 6, color: '#64B5F6'},
    {id: 7, color: '#FF6F00'},
    {id: 8, color: '#FFA000'},

    {id: 9, color: '#FFB300'},
    {id: 10, color: '#CE9600'},
    {id: 11, color: '#8D6E63'},
    {id: 12, color: '#6D4C41'},
    {id: 13, color: '#D32F2F'},
    {id: 14, color: '#FF1744'},
    {id: 15, color: '#F44336'},
    {id: 16, color: '#EC407A'},

    {id: 17, color: '#AD1457'},
    {id: 18, color: '#6A1B9A'},
    {id: 19, color: '#AB47BC'},
    {id: 20, color: '#BA68C8'},
    {id: 21, color: '#00695C'},
    {id: 22, color: '#00897B'},
    {id: 23, color: '#4DB6AC'},
    {id: 24, color: '#2E7D32'},

    {id: 25, color: '#43A047'},
    {id: 26, color: '#64DD17'},
    {id: 27, color: '#212121'},
    {id: 28, color: '#5F7C8A'},
    {id: 29, color: '#B0BEC5'},
    {id: 30, color: '#455A64'},
    {id: 31, color: '#607D8B'},
    {id: 32, color: '#90A4AE'},
  ],
  accounts: [],
  account: {}
}

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACCOUNTS:
      return {...state, accounts: action.acc}
    case SET_ACCOUNT:
      return {...state, account: action.acc}
    default:
      return state
  }
}

export const setAccountsAC = (acc) => ({type: SET_ACCOUNTS, acc})
export const setAccountAC = (acc) => ({type: SET_ACCOUNT, acc})

export default accountReducer
