import { CHANGE_TEXT } from '../constants';

const initialState = { text: 'from Redux' };

export default function testeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TEXT:
      return {
        text: action.text
      };
    default:
      return state;
  }
}
