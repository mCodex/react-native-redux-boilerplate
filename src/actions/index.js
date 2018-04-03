import { CHANGE_TEXT, GET_GOOGLE } from '../constants';

export function setText(text) { //eslint-disable-line
  return {
    type: CHANGE_TEXT,
    text
  };
}

export function getGoogle() { //eslint-disable-line
  return {
    type: GET_GOOGLE
  };
}
