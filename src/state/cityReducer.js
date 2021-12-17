import { GET_CITY, IS_LOADING } from './types';
const initialState = {
  city: '',
  isLoading: false,
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CITY:
      return {
        city: action.payload,
        isLoading: false,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
