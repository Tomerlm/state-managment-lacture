import { ADD_ANSWER } from './types';
const initialState = {
  answers: [],
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ANSWER:
      return {
        ...state,
        answers: [...state.answers, action.payload],
      };
    default:
      return state;
  }
};
