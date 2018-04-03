import { CHANGE_TEXT } from '../constants';

export function setText(text) { //eslint-disable-line
  return {
    type: 'CHANGE_TEXT',
    text
  };
}
