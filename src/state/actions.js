import { ADD_ANSWER } from './types';

export const addAnswer = (answer, city) => {
  return {
    type: ADD_ANSWER,
    payload: {
      guess: answer,
      actual: 10,
    },
  };
};
