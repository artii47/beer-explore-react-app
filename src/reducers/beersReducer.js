export default (state = {}, action) => {
  switch(action.type){
    case 'FETCH_BEERS':
      return {...action.payload}
    default:
      return state
  }
}