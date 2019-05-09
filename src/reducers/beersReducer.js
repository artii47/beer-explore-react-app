export default (state = {}, action) => {
  switch(action.type){
    case 'FETCH_BEERS':
      return {...state, ...action.payload}
    default:
      return state
  }
}