import { ADD_ANSWER } from './types';

export const addAnswer = (answer, city) => {
  return {
    type: ADD_ANSWER,
    payload: {
      city,
      guess: answer,
      actual: 10,
    },
  };
};
