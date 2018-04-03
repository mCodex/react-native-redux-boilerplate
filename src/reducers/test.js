import { CHANGE_TEXT } from '../constants';

const initialState = { text: 'from Redux' };

export default function testeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text
      };
    case 'GET_GOOGLE_SUCCESS':
      return {
        ...state,
        status: action.status
      };
    default:
      return state;
  }
}
