import { GET_CITY, IS_LOADING } from './types';
import fetchCity from './utils';

export const getCity = () => {
  return async (dispatch) => {
    dispatch({
      type: IS_LOADING,
    });
    setTimeout(async () => {
      const city = await fetchCity();
      dispatch({
        type: GET_CITY,
        payload: city,
      });
    }, 2000);
  };
};
