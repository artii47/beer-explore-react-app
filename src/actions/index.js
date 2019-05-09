import beers from '../apis/beers';

export const fetchBeers = () => async (dispatch) => {
  const response = await beers.get('/beers')

  dispatch({type: 'FETCH_BEERS', payload: response.data});
}